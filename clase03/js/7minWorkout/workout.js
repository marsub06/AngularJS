'use strict';
angular.module('7minWorkout').controller('WorkoutController',['$scope','$interval',function($scope,$interval){
	
	var ejercicios = [];
	ejercicios.push({

		detalle: new Ejercicio({
                  nombre: "jumpingJacks",
                  titulo: "Jumping Jacks",
                  descripcion: "A jumping jack or star jump, also called side-straddle hop is a physical jumping exercise.",
                  imagen: "img/JumpingJacks.png",
                  videos: ["//www.youtube.com/embed/dmYwZH_BNd0", "//www.youtube.com/embed/BABOdJ-2Z6o", "//www.youtube.com/embed/c4DAnQ6DtF8"],
                  procedimiento: "assume"
              }),
              duracion: 30
	});

	 
	 
 function Ejercicio(args) {
          this.nombre = args.nombre;
          this.titulo = args.titulo;
          this.descripcion = args.descripcion;
          this.imagen = args.imagen;
          this.related = {};
          this.videos = args.videos;
          this.sonido = args.sonido;
          this.procedimiento = args.procedimiento;
      }

    var comenzarEjercicio=function(planEjercicios)
    {
    	$scope.ejercicioActual=planEjercicios;
    	$scope.duracionEjercicioActual=0;
    	$interval(function () {
    		++$scope.duracionEjercicioActual;

    	}, 1000,$scope.ejercicioActual.duracion).then(function(){
    		comenzarEjercicio(ejercicios.shift());
    	});
    };
    
    comenzarEjercicio(ejercicios.shift());



}]);

