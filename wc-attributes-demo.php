<?php

/**
 * Plugin Name: Wc Attributes Demo
 */

namespace WcAttributesDemo;

function register_block()
{
  $dir = __DIR__;

  $index_js = 'dist/index.js';
  wp_register_script(
    'wc-lit-attributes-demo',
    plugins_url($index_js, __FILE__),
    array(
      'wp-block-editor',
      'wp-blocks',
      'wp-i18n',
      'wp-element',
    ),
    filemtime("$dir/$index_js"),
    true
  );

  register_block_type(
    $dir,
    [
      'script' => 'wc-lit-attributes-demo',
    ]
  );
}
add_action('init', __NAMESPACE__ . '\register_block');
