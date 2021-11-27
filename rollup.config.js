import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel'; 
import { uglify } from "rollup-plugin-uglify";
export default {
    input: 'src/index.js',
    output: {
        name: 'index',
        exports: 'named',
    },
    plugins: [
        commonjs(),
        babel({
            exclude: 'node_modules/**'
          }),
        uglify()
    ],
};