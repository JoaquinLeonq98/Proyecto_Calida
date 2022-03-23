const DPR = window.devicePixelRatio || 1;

// Configs
var particleAmount = 240;
var particleMaxSpeed = 0.8;
var particleMinSpeed = 0.5;
var particleRadius = 1 * DPR;
var triangleMaxEdgeSize = 150 * DPR;
var bkgColor = '#F2F2F2';
var canvasWidth = document.body.clientWidth * DPR;
var canvasheight = document.body.clientHeight * DPR;
var triangleLineWidth = 0.6 * DPR;
var triangleColor = '#005691';

// Vars
var canvas, context;
var canvasWidth, canvasheight;
var delaunay;
var particles = [];

document.body.style.background = bkgColor;

/**
 * requestAnimationFrame
 */
var requestAnimationFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            window.oRequestAnimationFrame      ||
            window.msRequestAnimationFrame     ||
            function (callback) {
                window.setTimeout(callback, 1000 / 60);
            };
})();

/**
 * Init
 */
function init() {

    canvas = document.getElementById('canvas');
    window.addEventListener('resize', resize, false);
    resize(null);
    delaunay = new Delaunay(canvasWidth, canvasheight, canvas);
    // create the particle
    function addParticle(x, y) {
        var particleUnity = new Particle(x, y);
        var l = Math.random() * (particleMaxSpeed - particleMinSpeed) + particleMinSpeed;
        var a = Math.random() * Math.PI * 2;
        particleUnity.velocityX = l * Math.cos(a);
        particleUnity.velocityY = l * Math.sin(a);
        particles.push(particleUnity);
    }
    var i;
    for (i = 0; i < particleAmount; i++) {
        addParticle(Math.random() * canvasWidth, Math.random() * canvasheight);
    }
    requestAnimationFrame(loop);
}

/**
 * Resize event handler
 */
function resize(e) {
    canvasWidth = document.body.clientWidth * DPR;
    canvasheight = document.body.clientHeight * DPR;
    canvas.width = canvasWidth;
    canvas.height = canvasheight;
    canvas.style.width = `${canvasWidth / DPR}px`;
    canvas.style.height = `${canvasheight / DPR}px`;
    context = canvas.getContext('2d');
    context.lineWidth = triangleLineWidth;
    context.fillStyle = context.strokeStyle = triangleColor;
    context.lineCap = context.lineJoin = 'round';
    if (delaunay) {
        delaunay.width = canvasWidth;
        delaunay.height = canvasheight;
    }
}

/**
 * Animation loop
 */
function loop() {
    var w = canvasWidth;
    var h = canvasheight;
    var ctx = context;

    ctx.save();
    ctx.fillStyle = bkgColor;
    ctx.fillRect(0, 0, w, h);
    ctx.restore();

    // erase delaunay on each loop
    delaunay.clear();

    var len, i;

    // manage particles velocity and position
    for (len = particles.length, i = 0; i < len; i++) {
        particles[i].x += particles[i].velocityX;
        particles[i].y += particles[i].velocityY;
        // particles must not leave the canvas
        if (particles[i].x < 0) {
            particles[i].x = 0;
            if (particles[i].velocityX < 0) particles[i].velocityX *= -1;
        }
        if (particles[i].x > w) {
            particles[i].x = w;
            if (particles[i].velocityX > 0) particles[i].velocityX *= -1;
        }
        if (particles[i].y < 0) {
            particles[i].y = 0;
            if (particles[i].velocityY < 0) particles[i].velocityY *= -1;
        }
        if (particles[i].y > h) {
            particles[i].y = h;
            if (particles[i].velocityY > 0) particles[i].velocityY *= -1;
        }
    }

    // get the triangle with triangulation from the particles
    var triangles = delaunay.multipleInsert(particles).getTriangles();

    var edges, edge;
    var polygon = [];
    var k, klen;

    for (len = triangles.length, i = 0; i < len; i++) {

        // continue if a triangle doesn't exist
        if (triangles[i].id === null) continue;

        edges = triangles[i].edges;

        //each triangle must have 3 edges
        edgesLoop: for (j = 0; j < 3; j++) {
            edge = edges[j];

            for (klen = polygon.length, k = 0; k < klen; k++) {
                if (edge.eq(polygon[k])) continue edgesLoop;
            }

            polygon.push(edge);
        }
    }

    // if youwant to draw particles
    // ctx.beginPath();
    // for (ilen = particles.length, i = 0; i < ilen; i++) {
    //     p = particles[i];
    //     ctx.moveTo(particles[i].x + particleRadius, particles[i].y);
    //     ctx.arc(particles[i].x, particles[i].y, particleRadius, 0, Math.PI * 2, false);
    // }
    // ctx.fill();

    // drawing triangles
    for (len = polygon.length, i = 0; i < len; i++) {
        edge = polygon[i];
        p0 = edge.nodes[0];
        p1 = edge.nodes[1];

        dx = p0.x - p1.x;
        dy = p0.y - p1.y;
        distSq = dx * dx + dy * dy;
        // the bigger edge of the triangle is limited to triangleMaxEdgeSize
        var triangleMaxEdgeSizeSquare = triangleMaxEdgeSize * triangleMaxEdgeSize;
        if (distSq < triangleMaxEdgeSizeSquare) {
            ctx.beginPath();
            ctx.moveTo(p0.x, p0.y);
            ctx.lineTo(p1.x, p1.y);
            ctx.closePath();
            ctx.save();
            ctx.stroke();
            ctx.restore();
        }
    }

    requestAnimationFrame(loop);
}


//-----------------------------
// CLASS from akm2's "Particle Triangulation" https://jsdo.it/akm2/cu5u
//-----------------------------

/**
 * Delaunay
 */
var Delaunay = (function() {
    
    /**
     * Node
     * 
     * @param {Number} x
     * @param {Number} y
     * @param {Number} id
     */
    function Node(x, y, id) {
        this.x = x;
        this.y = y;
        this.id = !isNaN(id) && isFinite(id) ? id : null;
    }
    
    Node.prototype = {
        eq: function(p) {
            var dx = this.x - p.x;
            var dy = this.y - p.y;
            return (dx < 0 ? -dx : dx) < 0.0001 && (dy < 0 ? -dy : dy) < 0.0001;
        },
        
        toString: function() {
            return '(x: ' + this.x + ', y: ' + this.y + ')';
        }
    };

    /**
     * Edge
     * 
     * @param {Node} p0
     * @param {Node} p1
     */
    function Edge(p0, p1) {
        this.nodes = [p0, p1];
    }
    
    Edge.prototype = {
        eq: function(edge) {
            var na = this.nodes, nb = edge.nodes;
            var na0 = na[0], na1 = na[1], nb0 = nb[0], nb1 = nb[1];
            return (na0.eq(nb0) && na1.eq(nb1)) || (na0.eq(nb1) && na1.eq(nb0));
        }
    };
    
    /**
     * Triangle
     * 
     * @param {Node} p0
     * @param {Node} p1
     * @param {Node} p2
     */
    function Triangle(p0, p1, p2) {
        this.nodes = [p0, p1, p2];
        this.edges = [new Edge(p0, p1), new Edge(p1, p2), new Edge(p2, p0)];
        this._createId();
        this._createCircumscribedCircle();
    }

    Triangle.prototype = {
        id: null, // ノードの組み合わせによる識別子
        _circle: null, // 外接円
        
        /**
         * ノードの組み合わせによる識別子を作成する
         * 識別子の設定されていないノードがある場合 id は null
         */
        _createId: function() {
            var nodes = this.nodes;
            var id0 = nodes[0].id;
            var id1 = nodes[1].id;
            var id2 = nodes[2].id;
            if (id0 !== null && id1 !== null && id2 !== null) {
                this.id = [id0, id1, id2].sort().join('_');
            }
        },
        
        /**
         * この三角形の外接円を作成する
         */
        _createCircumscribedCircle: function() {
            var nodes = this.nodes;
            var p0 = nodes[0];
            var p1 = nodes[1];
            var p2 = nodes[2];

            var ax = p1.x - p0.x, ay = p1.y - p0.y;
            var bx = p2.x - p0.x, by = p2.y - p0.y;
            var c = 2 * (ax * by - ay * bx);

            var t = (p1.x * p1.x - p0.x * p0.x + p1.y * p1.y - p0.y * p0.y);
            var u = (p2.x * p2.x - p0.x * p0.x + p2.y * p2.y - p0.y * p0.y);
            
            if (!this._circle) this._circle = {};

            var circle = this._circle;
            circle.x = ((p2.y - p0.y) * t + (p0.y - p1.y) * u) / c;
            circle.y = ((p0.x - p2.x) * t + (p1.x - p0.x) * u) / c;

            var dx = p0.x - circle.x;
            var dy = p0.y - circle.y;
            circle.radiusSq = dx * dx + dy * dy;
        },
        
        /**
         * 座標がこの外接円に含まれるか示す
         */
        circleContains: function(p) {
            var circle = this._circle;
            var dx = circle.x - p.x;
            var dy = circle.y - p.y;
            var distSq = dx * dx + dy * dy;
            
            return distSq < circle.radiusSq;
        }
    };
    
    
    /**
     * Delaunay
     * 
     * @param {Number} width
     * @param {Number} height
     */
    function Delaunay(width, height, el) {
        this.width = width;
        this.height = height;
        this.el = el
        
        this._triangles = null;
        
        this.clear();
    }

    Delaunay.prototype = {
        clear: function() {
            var p0 = new Node(0, 0);
            var p1 = new Node(this.width, 0);
            var p2 = new Node(this.width, this.height);
            var p3 = new Node(0, this.height);
            
            this._triangles = [
                new Triangle(p0, p1, p2),
                new Triangle(p0, p2, p3)
            ];
            
            return this;
        },
        
        multipleInsert: function(m) {
            for (var i = 0, len = m.length; i < len; i++) {
                this.insert(m[i]);
            }
            
            return this;
        },
        
        insert: function(p) {
            var triangles = this._triangles;
            var t;
            var temps = [];
            var edges = [];
            
            var i, ilen;

            for (ilen = triangles.length, i = 0; i < ilen; i++) {
                t = triangles[i];
                
                // 座標が三角形の外接円に含まれるか調べる
                if (t.circleContains(p)) {
                    // 含まれる場合三角形の辺を保存
                    edges.push(t.edges[0], t.edges[1], t.edges[2]);
                } else {
                    // 含まれない場合は持ち越し
                    temps.push(t);
                }
            }
            
            var edge;
            var polygon = [];
            var j, jlen;
            var isDuplicate;

            // 辺の重複をチェック, 重複する場合は削除する
            edgesLoop: for (ilen = edges.length, i = 0; i < ilen; i++) {
                edge = edges[i];
                
                // 辺を比較して重複していれば削除
                for (jlen = polygon.length, j = 0; j < jlen; j++) {
                    if (edge.eq(polygon[j])) {
                        polygon.splice(j, 1);
                        continue edgesLoop;
                    }
                }
                
                polygon.push(edge);
            }
            
            for (ilen = polygon.length, i = 0; i < ilen; i++) {
                edge = polygon[i];
                temps.push(new Triangle(edge.nodes[0], edge.nodes[1], p));
            }
            
            this._triangles = temps;
            
            return this;
        },
        
        getTriangles: function() {
            return this._triangles.slice();
        }
    };
    
    Delaunay.Node = Node;
    
    return Delaunay;
    
})();


/**
 * Particle
 * 
 * @param {Number} x
 * @param {Number} y
 * @super Delaunay.Node
 */
var Particle = (function(Node) {
    
    // 生成順に数値の ID を付与する
    var currentId = 0;
    function getId() { return currentId++; }
    
    function Particle(x, y) {
        Node.call(this, x, y, getId());
        this.velocityX = 0;
        this.velocityY = 0;
    }

    Particle.prototype = new Node();

    return Particle;
    
})(Delaunay.Node);


// Init
window.addEventListener('load', init, false);
