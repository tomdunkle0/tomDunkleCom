/*----------------------------------------------------------------------*\
 | File: deersim/generator.js                                           |
 | Defines the Generator. The Generator uses a counters to periodically |
 | generate vehicles and powerups while the player is playing a round.  |
\*----------------------------------------------------------------------*/

function Generator() {
   this.vehicleCounter = 0; // Initialize this Generator's vehicle counter.
   this.powerupCounter = 0; // Initialize this Generator's powerup counter.
}

/*--------------------------------------------------------------------------*\
 | Returns a lane which is based off a generated random                     |
 | number and individual counters for each lane.                            |
 | Used to determine which lane new Vehicles will start in.                 |
 | @returns int lane -- the lane value to be passed to a generated Vehicle. |
\*--------------------------------------------------------------------------*/
Generator.prototype.calculateLane = function() {
   var randomDecimal = Math.random(); // Generate a random decimal.

   // Calculate the number of lanes that the road manager is managing.
   var numLanes = (deersim.roadManager.maxLane - deersim.roadManager.minLane) + 1;

   /* Depending on min/max lane, use the value of randomDecimal to
      decide which lane the Vehicle/Powerup in question is generated in. */
   if (numLanes === 3) { // When three active lanes, each has a 33% chance.
      if (randomDecimal < 0.33)
         return deersim.roadManager.minLane;
      else if ((randomDecimal >= 0.33) && (randomDecimal < 0.66))
         return (deersim.roadManager.minLane + 1);
      else if (randomDecimal >= 0.66)
         return (deersim.roadManager.minLane + 2);
   }
   else if (numLanes === 4) { // When four active lanes, each has a 25% chance.
      if (randomDecimal < 0.25)
         return deersim.roadManager.minLane;
      else if ((randomDecimal >= 0.25) && (randomDecimal < 0.5))
         return (deersim.roadManager.minLane + 1);
      else if ((randomDecimal >= 0.5) && (randomDecimal < 0.75))
         return (deersim.roadManager.minLane + 2);
      else if (randomDecimal >= 0.75)
         return (deersim.roadManager.minLane + 3);
   }
   else if (numLanes === 5) { // When five active lanes, each has a 20% chance.
      if (randomDecimal < 0.2)
         return deersim.roadManager.minLane;
      else if ((randomDecimal >= 0.2) && (randomDecimal < 0.4))
         return (deersim.roadManager.minLane + 1);
      else if ((randomDecimal >= 0.4) && (randomDecimal < 0.6))
         return (deersim.roadManager.minLane + 2);
      else if ((randomDecimal >= 0.6) && (randomDecimal < 0.8))
         return (deersim.roadManager.minLane + 3);
      else if (randomDecimal >= 0.8)
         return (deersim.roadManager.minLane + 4);
   }

   return -3;
}; // calculateLane()

/*----------------------------------------------------------------------------*\
 | Returns a speed value which is based off a generated random number.        |
 | Used to determine the speed of new Vehicles.                               |
 | @returns int speed -- the speed value to be passed to a generated Vehicle. |
\*----------------------------------------------------------------------------*/
Generator.prototype.calculateSpeed = function() {
   var randomDecimal = Math.random(); // Generate a random decimal.

   if (randomDecimal < 0.25) { // If the random decimal is between 0 and 0.25,
      return 3;               // Return a speed value of 3
   }
   else if ((randomDecimal >= 0.25) && (randomDecimal < 0.5)) {
      return 4; // Else if the random decimal is between 0.25 and 0.5,
   }             // Return a speed value of 4
   else if ((randomDecimal >= 0.5) && (randomDecimal < 0.75)) {
      return 5; // Else if the random decimal is between 0.5 and 0.75,
   }             // Return a speed value of 5
   else {        // Else if the random decimal is between 0.75 and 1,
      return 6; // Return a speed value of 6
   }
}; // calculateSpeed

/*--------------------------------------------------------------*\
 | Generates a boss for the player to fight, with the boss type |
 | determined based on the current game environment.            |
 | @returns <any> boss -- the newly generated boss.             |
\*--------------------------------------------------------------*/
Generator.prototype.generateBoss = function() {
   // If the current environment is I-84...
   if (deersim.backgroundManager.environment === CONST_ENVIRONMENT_I84) {
      return new Coop(); // ...then generate a Coop for the player to fight.
   }
};

/*--------------------------------------------------------------------*\
 | Generates a Pothole with 40% probability. Otherwise, returns null. |
\*--------------------------------------------------------------------*/
Generator.prototype.generatePothole = function() {
   var randomDecimal = Math.random(); // Generate a random decimal.
   
   // If the random decimal is within the desired range...
   if ((randomDecimal >= 0.3)
    && (randomDecimal < 0.7)) {
      // ...then generate and return a Pothole.
      var pothole = new Pothole(this.calculateLane());
      return pothole;
   }
   else
      return null; // ...otherwise, return null.
};

/*--------------------------------------------------------------*\
 | Generates a powerup object with a calculated lane.           |
 | The type of powerup is determined based on a random decimal. |
 | @returns <any> powerup -- the newly generated powerup.       |
\*--------------------------------------------------------------*/
Generator.prototype.generatePowerup = function() {
   var randomDecimal = Math.random(); // Generate a random decimal.
   
   // #TODO -- modify the frequency with which powerups are generated.
   // Use the random decimal to determine the powerup type.
   if (randomDecimal < 0.5) {
      // Create a new LightningRobe.
      return new LightningRobe(this.calculateLane());
   }
   else { // Create a new Irradiation.
      return new Irradiation(this.calculateLane());
   }
}

/*--------------------------------------------------------------*\
 | Generates a vehicle object with a calculated lane and speed. |
 | The type of vehicle is determined based on a random decimal. |
 | @returns <any> vehicle -- the newly generated vehicle.       |
\*--------------------------------------------------------------*/
Generator.prototype.generateVehicle = function() {
   var randomDecimal = Math.random(); // Generate a random decimal.
   
   // Based off of the environment and the random decimal,
   // Determine which vehicle will be returned by this function.
   if (deersim.backgroundManager.environment === CONST_ENVIRONMENT_I84) {
      if (randomDecimal < 0.11)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "WeenieMobile", 50000, 42);
      else if (randomDecimal < 0.22)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "AmishDave", 7500, 43);
      else if (randomDecimal <= 0.33)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "GolfCart", 5000, 26);
      else if (randomDecimal <= 0.44)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "Sean", 7000, 8);
      else if (randomDecimal <= 0.55)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "OilTanker", 250000, 82);
      else if (randomDecimal <= 0.66)
         // return new PimpMobile(this.calculateLane(), this.calculateSpeed());
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "PimpMobile", 10000, 34);
      else if (randomDecimal <= 0.77)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "BrandonQuad", 1000, 22);
      else if (randomDecimal <= 0.88)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "BigBeezy", 30, 22);
      else if (randomDecimal <= 0.96)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "SmartCar", 12000, 42);
      else if (randomDecimal <= 0.98)
         return new DeerTruck(this.calculateLane(), this.calculateSpeed());
      else {
         /* WhiteVans sit creepily by the side of the road, waiting to          |
         |  kidnap the active deer. Therefore, they will always be generated in |
         |  'lane 6' (i.e. by the side of the road), and with a speed of 2.     */
         return new WhiteVan(6, 2);
      }
   }
   else if (deersim.backgroundManager.environment === "sa40") {
      if (randomDecimal < 0.20)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "VWVan", 19000, 73);
      else if (randomDecimal <= 0.4)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "SA40Coupe", 3000, 97);
      else if (randomDecimal <= 0.6)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "Hummer", 15000, 86);
      else if (randomDecimal <= 0.8)
         return new Vehicle(this.calculateLane(), this.calculateSpeed(),
                            "OilTanker", 250000, 82);
      else
         return new DeerTruck(this.calculateLane(), this.calculateSpeed());
   }
   
   return new WeenieMobile(this.calculateLane(), this.calculateSpeed());
};

/*-------------------------*\
 | Updates this Generator. |
\*-------------------------*/
Generator.prototype.update = function() {
   this.vehicleCounter++; // Increment this Generator's vehicle counter.
   this.powerupCounter++; // Increment this Generator's powerup counter.

   if (this.vehicleCounter === 58) { // If this Generator's vehicle counter has elapsed,
      if (deersim.state === "bossBattle") { // If the player is fighting a boss...
         var potholeBuffer = generatePothole(); // Generate a potential Pothole.
         
         if (potholeBuffer instanceof Pothole)     // If there was a real Pothole generated...
            deersim.obstacles.push(potholeBuffer); // ...add it to the obstacles array.
      }
      else
         deersim.vehicles.push(this.generateVehicle()); // Otherwise, generate a new vehicle.
      
      // Reset this Generator's vehicle counter.
      this.vehicleCounter = 0;
   }

   if (this.powerupCounter === 29) { // If this Generator's powerup counter has elapsed,
                                     // Then generate a random decimal.
      var randomDecimal = Math.random();

      if (randomDecimal < 0.1) {                // With a 10% probability...
         deersim.powerups.push(this.generatePowerup()); // Generate a new powerup.
      }

      this.powerupCounter = 0; // Reset this Generator's powerup counter.
   }
};