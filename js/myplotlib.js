function XYPlotter(id) {
    this.canvas = document.getElementById(id);
    if (!this.canvas) {
        throw new Error("Canvas element not found");
    }

    this.ctx = this.canvas.getContext("2d");
    if (!this.ctx) {
        throw new Error("2D context not available");
    }

    this.xMin = 0;
    this.yMin = 0;
    this.xMax = this.canvas.width;
    this.yMax = this.canvas.height;

    // Plot Line Function
    this.plotLine = function(x0, y0, x, y, color) {
        this.ctx.beginPath(); // Start a new path
        this.ctx.moveTo(x0, y0);
        this.ctx.lineTo(x, y);
        this.ctx.strokeStyle = color;
        this.ctx.stroke();
    }

    // Transform XY Function
    this.transformXY = function() {
        this.ctx.setTransform(1, 0, 0, -1, 0, this.canvas.height); // Use setTransform instead of transform to reset any existing transformations
    }

    // Plot Points Function
    this.plotPoints = function(x, y, color, radius = 3) {
        this.ctx.fillStyle = color;
        this.ctx.beginPath();
        this.ctx.ellipse(x, y, radius, radius, 0, 0, Math.PI * 2);
        this.ctx.fill();
    }
} // End Plotter Object