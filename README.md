# grunt-stitch

A grunt task that can stitch together multiple files into one based on the provided template.

## What does it do?
This grunt task will automatically join multiple files into one file in the order you have defined in your stitch template file.

A stitch template file could look something like this:

```javascript
/*# src.js #*/

/* you can put arbitrary JavaScript code wherever in this file */

/*# some_file.js */
```

If we then had the files `src.js` and `some_file.js` and ran the `stitch` task, we would get a new file that would look something like this:

```javascript
contents of src.js file

/* you can put arbitrary JavaScript code wherever in this file */

contents of some_file.js file
```

## Installation
Install the plugin with `npm`:

```shell
npm install grunt-stitch --save-dev
```
Load the task in your `Gruntfile.js`:

```javascript
grunt.loadNpmTasks('grunt-stitch');
```

## Configuration
In  order for the task to work it needs to know about two files:
- `templateFile`: the file to use as the template
- `out`: the file to write the result to

To configure the task put this into your `Gruntfile.js`.

```javascript
grunt.initConfig( {
	stitch: {
		all: {
			templateFile: 'path/to/template.js',
			out: 'path/to/out.js'
		}
	}
} );
```

_Note_: you can have multiple targets (invoked with `grunt stitch:target_name`). `all` is one such target.

Please referrer to the Grunt [Getting Started](http://gruntjs.com/getting-started) guide, if you haven't used Grunt before and need help.


## License
Licensed under MIT. See `LICENSE.md` file for details.