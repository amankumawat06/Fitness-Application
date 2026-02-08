const express = require("express");
const { Plan } = require("../models/planModel");
const { status } = require("http-status");

const createPlan = async (req, res) => {
  try {
    let { planName, goal, duration, exercises } = req.body;

    if (!planName || !goal || !duration || !exercises) {
      return res.status(status.BAD_REQUEST).json({
        message: "All fields are required!",
      });
    }

    let existingPlan = await Plan.findOne({ goal, planName });
    if (existingPlan) {
      return res.status(status.ALREADY_REPORTED).json({
        success: false,
        message: "Plan already exist!",
      });
    }

    let workoutPlan = new Plan({
      planName,
      goal,
      duration,
      exercises,
    });
    await workoutPlan.save();
    return res.status(status.OK).json({
      success: true,
      message: "Plans created successfully",
    });
  } catch (err) {
    return res.status(status.INTERNAL_SERVER_ERROR).json({
      success: false,
      message: "Internal server error!",
    });
  }
};

module.exports = { createPlan };
