// Copyright (c) 2022 Ashley Monaghan all rights reserved
//
// Created by: Ashley Monaghan
// Created on: Oct 2022
// This file contains the JS functions for index.html

"use strict"
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate() {
  // input
  const height = parseInt(document.getElementById("height-of-rectangle").value)
  const base = parseInt(document.getElementById("base-of-rectangle").value)

  // process
  const area = (b * h) / 2

  // output
  document.getElementById("area").innerHTML = "Area is: " + area + " cm²"
}
