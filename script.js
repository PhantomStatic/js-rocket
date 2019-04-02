var car = {
			make: 'VW',
			type: 'Polo',
			color: 'blue',
			isTurnedOn: false, //boolean
			numberOfWheels: 4,
			seats: ['seat1','seat2','seat3','seat4'],

			turnOn: function ()	{
				this.isTurnedOn = true; // this refers to the car
			},//method
			fly: function() {
				alert('fly');
			},
			switchCar: function(isOn)	{
				console.log('turn car ' + isOn);
				if (isOn == true) {
					this.isTurnedOn = true;
				} else {
					this.isTurnedOn = false;
				}
			}
		};
