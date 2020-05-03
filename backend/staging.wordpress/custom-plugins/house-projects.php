<?php
/**
 * @package House projects
 * @version 1.0.0
 */
/*
Plugin Name: House projects
Plugin URI: http://damienmeur.com/
Description: This allows using house projects as REST API in wordpress
Author: Damien Meur
Version: 1.0.0
Author URI: http://damienmeur.com/
*/
function generate_course_type() {

	$labels = array(
		'name'                  => 'Courses',
		'singular_name'         => 'Course',
	);
	$args = array(
		'label'                 => 'Course',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'custom-fields' ),
		'taxonomies'            => array( 'category', 'post_tag' ),
		'hierarchical'          => false,
        'public'                => true,
        'publicly_queryable'    => true,
		'capability_type'       => 'page',
		'show_in_rest'          => true,
		'rest_base'             => 'courses',
	);
    register_post_type( 'course_type', $args );
}
add_action( 'init', 'generate_course_type', 0 );

function get_price_field($object, $field_name, $value) {
    return floatval(get_post_meta($object['id'])[$field_name][0]);
}

function register_course_price_in_api() {
    register_rest_field('course_type', 'price', array(
        'get_callback' => 'get_price_field',
        'update_callback' => null,
        'schema' => null,
    ));
}

add_action( 'rest_api_init', 'register_course_price_in_api' );