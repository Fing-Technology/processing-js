// These are the test files in this dir to be run.
var tests = [
  { path: "blend-add.pde", tags: ["2D","BLEND"], epsilonOverride: 0.17 },
  { path: "blend-blend.pde", tags: ["2D","BLEND"], epsilonOverride: 0.10 },
  { path: "blend-burn.pde", tags: ["2D","BLEND"], epsilonOverride: 0.21 },
  { path: "blend-darkest.pde", tags: ["2D","BLEND"], epsilonOverride: 0.10 },
  { path: "blend-difference.pde", tags: ["2D","BLEND"], epsilonOverride: 0.10 },
  { path: "blend-dodge.pde", tags: ["2D","BLEND"], epsilonOverride: 0.24 },
  { path: "blend-exclusion.pde", tags: ["2D","BLEND"], epsilonOverride: 0.13 },
  { path: "blend-hard_light.pde", tags: ["2D","BLEND"], epsilonOverride: 0.14 },
  { path: "blend-lightest.pde", tags: ["2D","BLEND"], epsilonOverride: 0.10 },
  { path: "blend-multiply.pde", tags: ["2D","BLEND"], epsilonOverride: 0.10 },
  { path: "blend-overlay.pde", tags: ["2D","BLEND"], epsilonOverride: 0.15 },
  { path: "blend-screen.pde", tags: ["2D","BLEND"], epsilonOverride: 0.14 },
  { path: "blend-soft_light.pde", tags: ["2D","BLEND"], epsilonOverride: 0.11 },
  { path: "blend-subtract.pde", tags: ["2D","BLEND"], epsilonOverride: 0.10 },
  { path: "loadShape.pde", tags: ["2D","SVG"], epsilonOverride: 0.06 },
  { path: "loadShape2.pde", tags: ["2D","SVG"], epsilonOverride: 0.08 },
  { path: "loadShape3.pde", tags: ["2D","SVG"], epsilonOverride: 0.07 },
  { path: "loadShape4.pde", tags: ["2D","SVG"] },
  { path: "loadShape5.pde", tags: ["2D","SVG"], epsilonOverride: 0.06 },
  { path: "loadShape6.pde", tags: ["2D","SVG"], knownFailureTicket: "1401" },
  { path: "loadShape7.pde", tags: ["2D","SVG"] },
  { path: "loadShape9.pde", tags: ["2D","SVG"], epsilonOverride: 0.21 },
  { path: "loadShape10.pde", tags: ["2D","SVG"], epsilonOverride: 0.12 },
  { path: "loadShape11.pde", tags: ["2D","SVG"], epsilonOverride: 0.14 },
  { path: "loadShape12.pde", tags: ["2D","SVG"] },
  { path: "loadShape13.pde", tags: ["2D","SVG"] },
  { path: "loadShape14.pde", tags: ["2D","SVG"] },
  { path: "loadShape15.pde", tags: ["2D","SVG"] },
  { path: "blur.pde", tags: ["2D","Convolution"], epsilonOverride: 0.08 },
  { path: "edgedetect.pde", tags: ["2D","Convolution"], knownFailureTicket: "1399" },
  { path: "defaults-background_and_size.pde", tags: ["2D"] },
  { path: "background-gray.pde", tags: ["2D"] },
  { path: "background-gray-alpha.pde", tags: ["2D"] },
  { path: "background-3-arg.pde", tags: ["2D"] },
  { path: "background-3-arg-alpha.pde", tags: ["2D"] },
  { path: "background-color.pde", tags: ["2D"] },
  { path: "background-color-alpha.pde", tags: ["2D"] },
  { path: "background-hex.pde", tags: ["2D"] },
  { path: "background-hex2.pde", tags: ["2D"] },
  { path: "background-hex-alpha.pde", tags: ["2D"] },
  { path: "background-image.pde", tags: ["2D"] },
  { path: "background-before-size.pde", tags: ["2D"] },
  { path: "background-transparency.pde", tags: ["2D"] },
  { path: "background-color-1arg-2d.pde", tags: ["2D"] },
  { path: "background-color-1arg-alpha-2d.pde", tags: ["2D"] },
  { path: "background-hex-3RGB-alpha.pde", tags: ["2D"], knownFailureTicket: "1346" },
  { path: "background-gray-3d.pde", tags: ["3D"] },
  { path: "background-gray-alpha-3d.pde", tags: ["3D"] },
  { path: "background-3-arg-3d.pde", tags: ["3D"] },
  { path: "background-3-arg-alpha-3d.pde", tags: ["3D"] },
  { path: "background-color-3d.pde", tags: ["3D"] },
  { path: "background-color-alpha-3d.pde", tags: ["3D"] },
  { path: "background-hex-3d.pde", tags: ["3D"] },
  { path: "background-hex2-3d.pde", tags: ["3D"] },
  { path: "background-hex-alpha-3d.pde", tags: ["3D"] },
  { path: "background-color-1arg-3d.pde", tags: ["3D"] },
  { path: "background-color-1arg-alpha-3d.pde", tags: ["3D"] },
  { path: "background-hex-3RGB-alpha-3d.pde", tags: ["3D"], knownFailureTicket: "1346" },
  { path: "background-image-3d.pde", tags: ["3D"], knownFailureTicket: "1323" },
  { path: "circles.pde", tags: ["2D"] },
  { path: "circles2.pde", tags: ["2D"] },
  { path: "conditionals1.pde", tags: ["2D"] },
  { path: "conditionals2.pde", tags: ["2D"] },
  { path: "datatype-conversion.pde", tags: ["2D"] },
  { path: "distance-2d.pde", tags: ["2D"] },
  { path: "embedded-iteration.pde", tags: ["2D"] },
  { path: "iteration.pde", tags: ["2D"] },
  { path: "logical-operators.pde", tags: ["2D"] },
  { path: "point-line-rect.pde", tags: ["2D"] },
  { path: "sine-wave.pde", tags: ["2D"] },
  { path: "target.pde", tags: ["2D"] },
  { path: "triangle-strip.pde", tags: ["2D"], epsilonOverride: 0.08 },
  { path: "true-false.pde", tags: ["2D"] },
  { path: "variable-scope.pde", tags: ["2D"] },
  { path: "variables.pde", tags: ["2D"] },
  { path: "string-codepointat.pde", tags: ["2D", "Text"], epsilonOverride: 0.20 },
  { path: "text-defaults.pde", tags: ["2D", "Text"], epsilonOverride: 0.10 }, /* See ticket #1172 */
  { path: "text-ascent-descent.pde", tags: ["2D", "Text"], epsilonOverride: 0.09 }, /* See ticket #1172 */
  { path: "text-align.pde", tags: ["2D", "Text"], epsilonOverride: 0.14 }, /* See ticket #1172 */
  { path: "text-width_comic.pde", tags:["2D", "Text"], epsilonOverride: 0.35 }, /* See ticket #1172 */
  { path: "text-leading.pde", tags: ["2D", "Text"], epsilonOverride: 0.20 }, /* See ticket #1172 */
  { path: "letters.pde", tags: ["2D", "Text"], epsilonOverride: 0.45 }, /* See ticket #1172 */
  { path: "words.pde", tags: ["2D", "Text"], epsilonOverride: 0.25 }, /* See ticket #1172 */
  { path: "simple.pde", tags: ["2D"] },
  { path: "box-rotating.pde", tags: ["3D"] },
  { path: "translate-rect.pde", tags: ["2D"] },
  { path: "arc-tangent.pde",  tags: ["2D"] },
  { path: "arc_ref1.pde",  tags: ["2D"], epsilonOverride: 0.06 },
  { path: "arc_ref2.pde",  tags: ["2D"], epsilonOverride: 0.08 },
  { path: "arc_ref3.pde",  tags: ["2D"], epsilonOverride: 0.08 },
  { path: "bezier.pde", tags: ["2D"], epsilonOverride: 0.08 },
  { path: "ellipse.pde", tags: ["2D"] },
  { path: "piechart.pde", tags: ["2D"] },
  { path: "point-stroke-array-2d.pde", tags: ["2D"] },
  { path: "bezier-ellipse.pde", tags: ["2D"] },
  { path: "curves.pde", tags: ["2D"], epsilonOverride: 0.07 },
  { path: "curve.pde", tags: ["2D"], epsilonOverride: 0.09 },
  { path: "curveDetail.pde", tags: ["3D"], knownFailureTicket: "1416" },
  { path: "curvePoint.pde", tags: ["2D"], knownFailureTicket: "1417" },
  { path: "curveTangent.pde", tags: ["2D"], knownFailureTicket: "1417" },
  { path: "curveTightness.pde", tags: ["2D"], epsilonOverride: 0.11 },
  { path: "continuous-curve.pde", tags: ["2D"], epsilonOverride: 0.09 },
  { path: "points-lines.pde", tags: ["2D"] },
  { path: "rect-quad.pde", tags: ["2D"] },
  { path: "size-fill-rect.pde", tags: ["2D"] },
  { path: "triangle.pde", tags: ["2D"] },
  { path: "svg_font_biotyp.pde", tags: ["2D"] },
  { path: "3d-arc-4-combo.pde", tags: ["3D"], epsilonOverride: 0.13 },
  { path: "line-3d.pde", tags: ["3D"] },
  { path: "point_3D_stroke.pde", tags: ["3D"] },
  { path: "point_3D_strokeWeight.pde", tags: ["3D"], epsilonOverride: 0.22 },
  { path: "box.pde", tags: ["3D"], epsilonOverride: 0.18 },
  { path: "ambientLight_1.pde", tags: ["3D"] },
  { path: "ambientLight_p5test_1.pde", tags: ["3D"] },
  { path: "ambientLight_p5test_2.pde", tags: ["3D"], epsilonOverride: 0.10 },
  { path: "ambient_p5test.pde", tags: ["3D"] },
  { path: "directionalLight_p5test_1.pde", tags: ["3D"] },
  { path: "directionalLight_p5test_2.pde", tags: ["3D"] },
  { path: "directionalLight_scale.pde", tags: ["3D"] },
  { path: "emissive_p5test.pde", tags: ["3D"] },
  { path: "lightSpecular_p5test.pde", tags: ["3D"], epsilonOverride: 0.07 },
  { path: "pointLight_p5test.pde", tags: ["3D"] },
  { path: "shininess_p5test.pde", tags: ["3D"] },
  { path: "specular_p5test.pde", tags: ["3D"]},
  { path: "spotLight_p5test.pde", tags: ["3D"], knownFailureTicket: "1239" }, /* See ticket #1202 */
  { path: "3d-ellipse-fill-noFill-stoke-noStroke.pde", tags: ["3D"], epsilonOverride: 0.15 },
  { path: "createGraphics.pde", tags: ["3D"], epsilonOverride: 0.07 }, /* See ticket #1075 */
  { path: "rect-directional-light.pde", tags: ["3D"] },
  { path: "createimage.pde", tags: ["2D"] },
  { path: "array.pde", tags: ["2D"] },
  { path: "brightness-2.pde", tags: ["2D"] },
  { path: "create-image.pde", tags: ["2D"] },
  { path: "creating.pde", tags: ["2D"] },
  { path: "displaying.pde", tags: ["2D"], epsilonOverride: 0.06 },
  { path: "graphing-2d.pde", tags: ["2D"] },
  { path: "histogram.pde", tags: ["2D"], knownFailureTicket: "1174" },
  { path: "linear-gradient.pde", tags: ["2D"] },
  { path: "mandelbrot.pde", tags: ["2D"], knownFailureTicket: "1174" },
  { path: "modulo.pde", tags: ["2D"] },
  { path: "multiple-constructors.pde", tags: ["2D"], epsilonOverride: 0.06 },
  { path: "neighborhood.pde", tags: ["2D"], epsilonOverride: 0.08 },
  { path: "no-loop.pde", tags: ["2D"] },
  { path: "reading.pde", tags: ["2D"] },
  { path: "relativity.pde", tags: ["2D"] },
  { path: "triangle-flower.pde", tags: ["2D"] },
  { path: "self-1-success.pde", tags: ["Calibration"] },
  { path: "self-2-fail.pde", tags: ["Calibration"] },
  { path: "self-3-fail.pde", tags: ["Calibration"] },
  { path: "self-4-fail.pde", tags: ["Calibration"] },
  { path: "self-5-success.pde", tags: ["Calibration"] },
  { path: "beginEndShape-2dlines.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dnocloseline.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.06  },
  { path: "beginEndShape-2dnoclosetriangle.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dnocloserectangle.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dnofilltriangle.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dnofillrectangle.pde", tags:["endShape2D", "2D"] },
  { path: "beginEndShape-2dpoints.pde", tags:["endShape2D", "2D"], knownFailureTicket: "1245" },
  { path: "beginEndShape-2dpolygon.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquads.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquadstrip1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.07 },
  { path: "beginEndShape-2dquadstrip2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.10 },
  { path: "beginEndShape-2dtrianglefan1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.14 },
  { path: "beginEndShape-2dtrianglefan2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.17 },
  { path: "beginEndShape-2dtriangles1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-2dtriangles2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-2dtrianglestrip1.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-2dtrianglestrip2.pde", tags:["endShape2D", "2D"], epsilonOverride: 0.12 },
  { path: "beginEndShape-3dlines.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dnocloseline.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-3dnoclosetriangle.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.18 },
  { path: "beginEndShape-3dnocloserectangle.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.18 },
  { path: "beginEndShape-3dnofilltriangle.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-3dnofillrectangle.pde", tags:["endShape3D", "3D"], knownFailureTicket: "1271" },
  { path: "beginEndShape-3dpoints.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dpolygon.pde", tags:["endShape3D", "3D"], knownFailureTicket: "1286" },
  { path: "beginEndShape-3dquads.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.12, knownFailureTicket: "1271" },
  { path: "beginEndShape-3dquadstrip1.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.25 },
  { path: "beginEndShape-3dquadstrip2.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dtrianglefan1.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.27 },
  { path: "beginEndShape-3dtrianglefan2.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dtriangles1.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.18 },
  { path: "beginEndShape-3dtriangles2.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.15 },
  { path: "beginEndShape-3dtrianglestrip1.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "beginEndShape-3dtrianglestrip2.pde", tags:["endShape3D", "3D"], epsilonOverride: 0.20 },
  { path: "rotateZ.pde", tags: ["3D"] },
  { path: "blendcolor-add.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-difference.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-lightest.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-soft_light.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-blend.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-dodge.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-multiply.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-subtract.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-burn.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-exclusion.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-overlay.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-darkest.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-hard_light.pde", tags: ["2D", "BLEND"] },
  { path: "blendcolor-screen.pde", tags: ["2D", "BLEND"] },
  { path: "pixels-toarray.pde", tags: ["2D"] }
];
