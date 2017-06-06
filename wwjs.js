/**
 * Created by mdtang on 6/6/17.
 */
// Register an event listener to be called when the page is loaded.
window.addEventListener("load", eventWindowLoaded, false);

// Define the event listener to initialize Web World Wind.
function eventWindowLoaded() {
    // Create a World Window for the canvas.
    var wwd = new WorldWind.WorldWindow("canvasOne");

    // Add some image layers to the World Window's globe.
    wwd.addLayer(new WorldWind.BMNGLandsatLayer());

    // Add a compass, a coordinates display and some view controls to the World Window.
    wwd.addLayer(new WorldWind.CompassLayer());
    wwd.addLayer(new WorldWind.CoordinatesDisplayLayer(wwd));
    wwd.addLayer(new WorldWind.ViewControlsLayer(wwd));
}