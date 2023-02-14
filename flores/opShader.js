function opShaderSource() {
	const vert = `
		precision highp float;
		attribute vec3 aPosition;

		void main() {
			vec4 positionVec4 = vec4(aPosition, 1.0);
			positionVec4.xy = positionVec4.xy * 2.0 - 1.0;
			gl_Position = positionVec4;
		}
	`
	
	const frag = `
		precision highp float;

		uniform vec2 u_resolution;
		uniform vec3 u_color;


		float random(vec2 co){
				return fract(sin(dot(co.xy, vec2(12.9898,78.233))) * 43758.5453);
		}

		float map(float x, float o_min, float o_max, float r_min, float r_max){
				return (x-o_min)/(o_max-o_min)*(r_max-r_min)+r_min;
		}



		void main() {
				vec2 uv = gl_FragCoord.xy / u_resolution.xy;

				uv -= .5;

				uv.x *= u_resolution.x / u_resolution.y;
				float dist = length(uv);
				float ra;
				if (dist > 0.3) {
						ra = clamp(map(uv.y, -0.5, .5, 100.0, -50.0), 0.0, 150.0) + random(uv)*30.0;
				} else {
						ra = clamp(map(uv.y, -0.5, .5, -100.0, 200.0), 0.0, 150.0) + random(uv)*30.0;
				}
				float ratio = ra / 255.0;

				vec3 color = mix(vec3(1.0),u_color.rgb,ratio);
				gl_FragColor = vec4(color.rgb,1.0);
				// gl_FragColor = vec4(u_color.x*ratio+1.0*(1.0-ratio),u_color.y*ratio+1.0*(1.0-ratio),u_color.z*ratio+1.0*(1.0-ratio), 1.0);
		}
	`
	
	return [vert, frag]
}