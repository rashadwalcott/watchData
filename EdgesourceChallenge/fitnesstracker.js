export class FitnessTracker {
  heartRateRecording(timeNow, heartrate) {
    let obj = {};
    obj[timeNow] = heartrate;
    return obj;
  }
}

/*

fitness app ==> heart rate , step data, calories burn, workout type

stepData => compare days > 1 bringing in functions for the min, max, and avg
heartData => compare days > 0, we need to store heart rates and return the avg
workoutCalories => compare days > 0, find calories burned per workout type

{date:
    [heartrate : [date = ],
    stepdata : [],
    caloriesburn : [],
    workouttype ; [{
                startworkout{
                    workouttype:
                    startTime:;
                }
                Finishworkout{
                    workoutId:
                    endtime
                }
            }]
    ]
}


{
    heartrate : [day = ],
    stepdata : [day],
    caloriesburn : [day],
    workouttype ; [date:{
                startworkout{
                    workouttype:
                    startTime:;
                }
                Finishworkout{
                    workoutId:
                    endtime
                }
            }]
    
}
 */
