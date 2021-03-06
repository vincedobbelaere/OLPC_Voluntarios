<?php

// Bootstrap
require dirname(__FILE__) . DIRECTORY_SEPARATOR . 'bootstrap.php';

// Use Request from Symfony Namespace
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app->error(function (\Exception $e, $code) use ($app) {
	if ($code == 404) {
		return $app['twig']->render('errors/404.twig', array('error' => $e->getMessage()));
		//return '404 - Not Found! // ' . $e->getMessage();
	} else {
		return $app['twig']->render('errors/404.twig', array('error' => $e->getMessage()));
		//return 'Something went wrong! // ' . $e->getMessage();
	}
});



// Mount our Controllers
$app->mount('/', new ZamoraTeran\Provider\Controller\authController());
$app->mount('/voluntarios/', new ZamoraTeran\Provider\Controller\voluntariosController());
$app->mount('/empleados', new ZamoraTeran\Provider\Controller\empleadosController());
$app->mount('/log', new ZamoraTeran\Provider\Controller\logController());
$app->mount('/print', new ZamoraTeran\Provider\Controller\printController());
$app->mount('/ajax', new ZamoraTeran\Provider\Controller\ajaxController());
