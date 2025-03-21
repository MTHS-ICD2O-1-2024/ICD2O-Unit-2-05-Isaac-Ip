// Copyright (c) 2025 Isaac Ip All rights reserved
//
// Created by: Isaac Ip
// Created on: Mar 2025
// This file contains the JS functions for index.html

"use strict"

/**
 * This function calculates pay and tax.
 */
function calculateTax () {
  // input
  const hoursWorked = parseFloat(document.getElementById('hours-worked').value)
  const hourlyWage = parseFloat(document.getElementById('hourly-wage').value)

  // process
  const amountOfPay = (hoursWorked * hourlyWage) * (1 - 0.18)
  const amountOfTaxes = (hoursWorked * hourlyWage) * 0.18

  // output
  document.getElementById('pay').innerHTML = 'Your pay will be: $' + amountOfPay.toFixed(2)
  document.getElementById('taxes').innerHTML = 'The government will take: $' + amountOfTaxes.toFixed(2)
}
