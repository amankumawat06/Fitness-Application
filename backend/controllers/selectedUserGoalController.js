const { status } = require("http-status");
const { selectedUserGoal } = require("../models/selectedUserGoalModel");
const { Plan } = require("../models/planModel")

const setGoal = async (req, res) => {
  try {
    let { goal } = req.body;
    const userId = req.user.id; // From JWT

    if (!goal) {
      return res.status(status.BAD_REQUEST).json({
        message: "Goal is required",
      });
    }

    // check existing goal if find then update this
    let existingGoal = await selectedUserGoal.findOne({ user: userId });
    if (existingGoal) {
      existingGoal.goal = goal,
      existingGoal.selectedPlan = null,
      await existingGoal.save()

      return res.status(status.OK).json({
        success: true,
        message: "Goal updated successfully"
      })
    }

    // create new goal
    let newGoal = new selectedUserGoal({
        user: userId,
        goal,
    })
    await newGoal.save()

    return res.status(status.CREATED).json({
        success: true,
        message: `Goal created successfully`
    })

  } catch(err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message: `Internal Server Error!! ${err.message}`,
    });
  }
};


const getPlansByGoal = async (req,res) => {
  try{
    const userId = req.user.id

    //Find users goal
    const userGoal = await selectedUserGoal.findOne({ user: userId })
    if(!userGoal){
      return res.status(status.BAD_REQUEST).json({
        success:false,
        message:"Please set your goal first!"
      })
    }

    //Find plans matching goal   
    const plans = await Plan.find({ goal:userGoal.goal })

    if(plans.length == 0){
      return res.status(status.NOT_FOUND).json({
        success:false,
        message: "No workout plans found for your goal"
      })
    }

    return res.status(status.OK).json({
      success: true,
      goal: userGoal.goal,
      plans,
    })
  }catch(err){
    res.status(status.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: `Internal server error ${err}`
    })
  }
}


const selectPlan = async (req,res) => {
  try{
    const userId = req.user.id
    const{ planId } = req.body

    if(!planId){
      return res.status(status.BAD_REQUEST).json({
        message: "planId is required!"
      })
    }

    const userGoal = await selectedUserGoal.findOne({ user: userId })
    if(!userGoal){
      res.status(status.BAD_REQUEST).json({
        success:false,
        message:"Please set your goal first!"
      })
    }

    const plan = await Plan.findById(planId);
    if (!plan) {
      return res.status(404).json({
        success: false,
        message: "Plan not found",
      });
    }

    if (plan.goal !== userGoal.goal) {
      return res.status(400).json({
        success: false,
        message: "Selected plan does not match your goal",
      });
    }

    userGoal.selectedPlan = planId;
    await userGoal.save();

    return res.status(200).json({
      success: true,
      message: "Plan selected successfully",
    });

  }catch(err){
    res.status(status.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error!!"
    })
  }
}


const getSelectedPlan = async(req,res) => {
  let userId = req.user.id;

  try{
    let userGoal = await selectedUserGoal.findOne({user: userId}).populate("selectedPlan")

  if(!userGoal || !userGoal.selectedPlan){
    return res.status(status.NOT_FOUND).json({
      message: "No plan selected yet"
    })
  }

  return res.status(status.OK).json({
    success: true,
    goal: userGoal
    // plan
  })
  }catch(err){
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      message:"Internal setver error!"
    })
  }

}

module.exports = { setGoal , getPlansByGoal, selectPlan, getSelectedPlan }