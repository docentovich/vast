
console.log("bla-bla"); 
console.log("bla-bla 2"); 
(function(g, l) {
    function t(a, b, d) {
        this.name = a;
        this.timeout = null;
        this.onSetVisibility = b;
        this.win = d || g
    }

    function x(a) {
        return Object.create(Object.prototype, {
            linear: {
                get: function() {
                    return void 0 === this._linear ? !0 : this._linear
                },
                set: function(b) {
                    this._linear !== b && (this._linear = b, a(e.linearChange))
                }
            },
            size: {
                get: function() {
                    return this._size || {}
                },
                set: function(b) {
                    if (this._size) {
                        if (this._size.width !== b.width || this._size.height !== b.height) this._size = b, a(e.sizeChange)
                    } else this._size = b
                }
            },
            expanded: {
                get: function() {
                    return this._expanded ||
                        !1
                },
                set: function(b) {
                    this._expanded !== b && (this._expanded = b, a(e.expandedChange))
                }
            },
            skippableState: {
                get: function() {
                    return this._skippableState || !1
                },
                set: function(b) {
                    this._skippableState !== b && (this._skippableState = b, a(e.skippableStateChange))
                }
            },
            remainingTime: {
                get: function() {
                    return void 0 === this._remainingTime ? -2 : this._remainingTime
                },
                set: function(a) {
                    this._remainingTime !== a && (this._remainingTime = a)
                }
            },
            duration: {
                get: function() {
                    return void 0 === this._duration ? -2 : this._duration
                },
                set: function(b) {
                    this._duration !==
                        b && (this._duration = b, a(e.durationChange))
                }
            },
            volume: {
                get: function() {
                    return void 0 === this._volume ? .5 : this._volume
                },
                set: function(b) {
                    1 < b && (b /= 100);
                    0 > b && (b = 0);
                    this._volume !== b && (this._volume = b, a(e.volumeChange))
                }
            },
            companions: {
                get: function() {
                    return ""
                }
            },
            icons: {
                get: function() {
                    return !1
                }
            },
            desiredBitrate: {
                get: function() {
                    return void 0 === this._desiredBitrate ? 256 : this._desiredBitrate
                },
                set: function(a) {
                    this._desiredBitrate = a
                }
            },
            viewMode: {
                get: function() {
                    return this._viewMode || "normal"
                },
                set: function(a) {
                    this._viewMode =
                        a
                }
            }
        })
    }
    var e = {
            clickThru: "AdClickThru",
            durationChange: "AdDurationChange",
            error: "AdError",
            expandedChange: "AdExpandedChange",
            impression: "AdImpression",
            interaction: "AdInteraction",
            linearChange: "AdLinearChange",
            loaded: "AdLoaded",
            log: "AdLog",
            paused: "AdPaused",
            playing: "AdPlaying",
            sizeChange: "AdSizeChange",
            skipped: "AdSkipped",
            started: "AdStarted",
            stopped: "AdStopped",
            skippableStateChange: "AdSkippableStateChange",
            userAcceptInvitation: "AdUserAcceptInvitation",
            userClose: "AdUserClose",
            userMinimize: "AdUserMinimize",
            videoStart: "AdVideoStart",
            videoFirstQuartile: "AdVideoFirstQuartile",
            videoMidpoint: "AdVideoMidpoint",
            videoThirdQuartile: "AdVideoThirdQuartile",
            videoComplete: "AdVideoComplete",
            volumeChange: "AdVolumeChange"
        },
        u = {
            AdSkipped: "skip",
            AdStarted: "creativeView",
            AdVideoStart: "start",
            AdVideoFirstQuartile: "firstQuartile",
            AdVideoMidpoint: "midpoint",
            AdVideoThirdQuartile: "thirdQuartile",
            AdVideoComplete: "complete",
            AdUserAcceptInvitation: "acceptInvitation",
            AdUserMinimize: "collapse",
            AdUserClose: "close",
            AdPaused: "pause",
            AdPlaying: "resume",
            AdError: "error"
        },
        y = {
            AdVideoStart: "start",
            AdVideoFirstQuartile: "firstQuartile",
            AdVideoMidpoint: "midpoint",
            AdVideoThirdQuartile: "thirdQuartile",
            AdVideoComplete: "complete"
        },
        m = {
            getRandomId: function(a) {
                return (a || "") + Math.floor(1E13 * Math.random())
            },
            jsonToQueryString: function(a) {
                return "?" + Object.keys(a).map(function(b) {
                    return encodeURIComponent(b) + "=" + encodeURIComponent(a[b])
                }).join("&")
            },
            getElementWindow: function(a) {
                a = a.ownerDocument;
                return a.defaultView || a.parentWindow
            },
            getTopmostWindow: function() {
                var a =
                    g;
                try {
                    for (; a.parent !== a;) a.parent.document && (a = a.parent);
                    return a
                } catch (b) {
                    return a
                }
            },
            sendCustomEvent: function(a) {
                a.__r = m.getRandomId();
                a = "https://tag.rutarget.ru/tag" + m.jsonToQueryString(a);
                m.sendPixel(a)
            },
            sendPixel: function(a, b) {
                if (a) {
                    b = b || "img";
                    var d = l.createElement(b);
                    d.width = 1;
                    d.height = 1;
                    d.style.display = "none";
                    d.src = a;
                    "img" === b && (d.alt = "");
                    l.body.insertBefore(d, l.body.firstChild)
                }
            },
            getQueryParams: function(a) {
                return (a = a.split("?")[1]) ? a.split("&").reduce(function(a, d) {
                    var c = d.split("=");
                    c[0] &&
                        (a[c[0]] = decodeURIComponent(c[1]));
                    return a
                }, {}) : null
            },
            isIE: function() {
                return "Microsoft Internet Explorer" === navigator.appName && -1 < navigator.userAgent.indexOf("MSIE") || "Netscape" === navigator.appName && -1 < navigator.userAgent.indexOf("Trident")
            },
            isSafari: function() {
                return -1 < navigator.userAgent.indexOf("Safari") && -1 < navigator.vendor.indexOf("Apple")
            }
        },
        k = function(a, b) {
            this._container = a;
            this._containerWindow = m.getElementWindow(this._container);
            this._viewabilityPixelUrl = b;
            this._position = this._getPosition();
            this._timeInView = 0;
            this._viewabilityDetected = !1;
            this._checkingMethod = this._getCheckingMethod();
            this.getViewabilityState = null
        };
    k.prototype._getCheckingMethod = function() {
        if (g.IntersectionObserver) return "Intersection Observer";
        if (g.mozInnerScreenY && g.mozInnerScreenX && "onPage" !== this._position) return "mozInnerScreen";
        if (m.isIE()) return "Element from point";
        if (g.requestAnimationFrame) return "Request animation frame";
        if ("crossDomainFrame" !== this._position) return "Bounding client rect"
    };
    k.prototype.init = function() {
        switch (this._checkingMethod) {
            case "Intersection Observer":
                this._initIntersectionObserver();
                break;
            case "mozInnerScreen":
                this._initMozChecker();
                break;
            case "Element from point":
                this._initIEChecker();
                break;
            case "Request animation frame":
                this._initRequestAnimationFrameChecker();
                break;
            case "Bounding client rect":
                this._initBoundingClientRectChecker()
        }
    };
    k.prototype._initIntersectionObserver = function() {
        this.getViewabilityState = this._getIntersectionObserverState;
        this._intersectionRatio = 0;
        this._observer = new g.IntersectionObserver(this._observerHandler.bind(this), {
            threshold: [0, .1, .2, .3, .4, .45, .5, .55,
                .6, .7, .8, .9, 1
            ]
        });
        this._observer.observe(this._container)
    };
    k.prototype._observerHandler = function(a) {
        this._intersectionRatio = Math.round(100 * a[0].intersectionRatio)
    };
    k.prototype._getIntersectionObserverState = function() {
        return this._hasFocus() && 50 <= this._intersectionRatio ? "viewable" : "notViewable"
    };
    k.prototype._initMozChecker = function() {
        this.getViewabilityState = this._getMozCheckerState
    };
    k.prototype._getMozCheckerState = function() {
        var a = g.screenY + g.outerHeight,
            a = g.screenY + 55 < g.mozInnerScreenY + g.innerHeight /
            2 && a > g.mozInnerScreenY + g.innerHeight / 2,
            b = g.screenX,
            d = b + g.outerWidth;
        return b < g.mozInnerScreenX + g.innerWidth / 2 && d > g.mozInnerScreenX + g.innerWidth / 2 && a ? "viewable" : "notViewable"
    };
    k.prototype._initIEChecker = function() {
        this.getViewabilityState = this._getIECheckerState;
        this._ieGrid = this._getIEGrid()
    };
    k.prototype._getIECheckerState = function() {
        var a = this._ieGrid;
        if (!this._isVisibleIEGridPoint(a.center)) return "notViewable";
        var b = 0;
        a.points.forEach(function(a) {
            this._isVisibleIEGridPoint(a) && b++
        }, this);
        return b >=
            a.points.length / 2 ? "viewable" : "notViewable"
    };
    k.prototype._isVisibleIEGridPoint = function(a) {
        return !!l.elementFromPoint(a.x, a.y)
    };
    k.prototype._getIEGrid = function() {
        for (var a = [], b = 64, d = {
                width: this._container.clientWidth - 1,
                height: this._container.clientHeight - 1
            }, c = b / 2; d.clientWidth <= c || d.clientHeight <= c;) b /= 2, c = b / 2;
        for (var b = (d.clientWidth - 1) / (c - 1), d = (d.clientHeight - 1) / (c - 1), p = 0; p < c; p++) a.push({
            x: Math.floor(b * p),
            y: Math.floor(d * p)
        }, {
            x: Math.floor(b * p),
            y: Math.floor(d * (c - 1 - p))
        });
        return {
            center: {
                x: this._container.clientWidth /
                    2 - 1,
                y: this._container.clientHeight / 2 - 1
            },
            points: a
        }
    };
    k.prototype._initRequestAnimationFrameChecker = function() {
        this.getViewabilityState = this._getRequestAnimationFrameCheckerState;
        this._requestAnimationFramePointsSize = m.isSafari() ? 8 : 1;
        this._requestAnimationFramePoints = {
            top: {
                left: "50%",
                top: "20%",
                isVisible: !1,
                frame: null
            },
            bottom: {
                left: "50%",
                top: "80%",
                isVisible: !1,
                frame: null
            },
            left: {
                left: "20%",
                top: "50%",
                isVisible: !1,
                frame: null
            },
            right: {
                left: "80%",
                top: "50%",
                isVisible: !1,
                frame: null
            }
        };
        this._requestAnimationFramePointsWrapper =
            l.createElement("div");
        this._requestAnimationFramePointsWrapper.style.cssText = "left: 0px; top: 0px; width: 0px; height: 0px; position: absolute; z-index: -9999;";
        this._container.appendChild(this._requestAnimationFramePointsWrapper);
        g.rtgtInitViewabilityPixel = function(a) {
            (new t(a, this._setRequestAnimationFramePointVisibility.bind(this), this._requestAnimationFramePoints[a].frame.contentWindow)).checkVisibility()
        }.bind(this);
        for (var a in this._requestAnimationFramePoints)
            if (this._requestAnimationFramePoints.hasOwnProperty(a)) {
                var b =
                    l.createElement("iframe");
                b.width = this._requestAnimationFramePointsSize;
                b.height = this._requestAnimationFramePointsSize;
                b.frameBorder = 0;
                b.id = a;
                b.style.cssText = "position: absolute; left: 0; top: 0; border-style: none;display: block; pointer-events: none; opacity: 0;";
                this._requestAnimationFramePointsWrapper.appendChild(b);
                this._requestAnimationFramePoints[a].frame = b;
                this._setRequestAnimationFramePointPosition(a);
                b.contentWindow.rtgtsrc = '<html><head><body><script>window.parent["rtgtInitViewabilityPixel"]("' +
                    a + '");\x3c/script></body></head></html>';
                b.src = "javascript:window.rtgtsrc"
            }
    };
    k.prototype._getRequestAnimationFrameCheckerState = function() {
        var a = 0,
            b;
        for (b in this._requestAnimationFramePoints) this._requestAnimationFramePoints.hasOwnProperty(b) && this._requestAnimationFramePoints[b].isVisible && a++;
        return 2 <= a ? "viewable" : "notViewable"
    };
    k.prototype._setRequestAnimationFramePointsPosition = function() {
        for (var a in this._requestAnimationFramePoints) this._requestAnimationFramePoints.hasOwnProperty(a) && this._setRequestAnimationFramePointPosition(a)
    };
    k.prototype._setRequestAnimationFramePointPosition = function(a) {
        a = this._requestAnimationFramePoints[a];
        var b = this._getPointPositionByPercent(a.left, a.top);
        a.frame.style.left = b.x - this._requestAnimationFramePointsSize / 2 + "px";
        a.frame.style.top = b.y - this._requestAnimationFramePointsSize / 2 + "px"
    };
    k.prototype._setRequestAnimationFramePointVisibility = function(a, b) {
        this._requestAnimationFramePoints[a].isVisible = b
    };
    k.prototype._initBoundingClientRectChecker = function() {
        this.getViewabilityState = this._getBoundingClientRectCheckerState
    };
    k.prototype._getBoundingClientRectCheckerState = function() {
        var a = this._containerWindow,
            b = this._container.getBoundingClientRect(),
            d = this._getVisibilityRatio(b, a);
        try {
            for (; a !== g.top;) var c = a.name || (a.name = m.getRandomId("rtgt-")),
                a = a.parent,
                b = a.frames[c].frameElement.getBoundingClientRect(),
                d = Math.min(this._getVisibilityRatio(b, a), d)
        } catch (p) {
            return "undetermined"
        }
        return this._hasFocus() && 50 <= 100 * d ? "viewable" : "notViewable"
    };
    k.prototype.start = function() {
        this._viewabilityDetected || this._viewabilityInterval ||
            (this._viewabilityInterval = setInterval(this._checkViewability.bind(this), 250))
    };
    k.prototype.stop = function() {
        clearInterval(this._viewabilityInterval);
        this._viewabilityInterval = null
    };
    k.prototype._hasFocus = function() {
        return !l.hidden && ("crossDomainFrame" === this._position || g.top.document.hasFocus && g.top.document.hasFocus())
    };
    k.prototype._getPosition = function() {
        if (g.top === this._containerWindow) return "onPage";
        try {
            for (var a = this._containerWindow; a.parent !== a;) {
                if (a.parent.document.domain !== a.document.domain) return "crossDomainFrame";
                a = a.parent
            }
        } catch (b) {
            return "crossDomainFrame"
        }
        return "sameDomainFrame"
    };
    k.prototype._checkViewability = function() {
        switch (this.getViewabilityState()) {
            case "undetermined":
                this._destroyViewabilityWatchers();
                break;
            case "notViewable":
                this._timeInView = 0;
                break;
            case "viewable":
                this._timeInView += 250, 2E3 <= this._timeInView && (this._destroyViewabilityWatchers(), m.sendPixel(this._viewabilityPixelUrl))
        }
    };
    k.prototype._getVisibilityRatio = function(a, b) {
        var d = a.width,
            c = a.height,
            p = d * c;
        0 > a.top && (c += a.top);
        a.bottom > b.innerHeight &&
            (c -= a.bottom - b.innerHeight);
        0 > a.left && (d += a.left);
        a.right > b.innerWidth && (d -= a.right - b.innerWidth);
        return d * c / p
    };
    k.prototype._destroyViewabilityWatchers = function() {
        clearInterval(this._viewabilityInterval);
        this._viewabilityDetected = !0
    };
    k.prototype.onResize = function() {
        if (!this._viewabilityDetected) switch (this._checkingMethod) {
            case "Element from point":
                this._ieGrid = this._getIEGrid();
                break;
            case "Request animation frame":
                this._setRequestAnimationFramePointsPosition()
        }
    };
    t.prototype.checkVisibility = function() {
        var a =
            function() {
                this.timeout && this.win.clearTimeout(this.timeout);
                this.timeout = this.win.setTimeout(this.setVisibility.bind(this, !1), 100);
                this.setVisibility(!0);
                this.win.requestAnimationFrame(a)
            }.bind(this);
        this.win.requestAnimationFrame(a)
    };
    t.prototype.setVisibility = function(a) {
        this.onSetVisibility(this.name, a)
    };
    k.prototype._getPointPositionByPercent = function(a, b) {
        return {
            x: g.innerWidth * (parseFloat(a) / 100),
            y: g.innerHeight * (parseFloat(b) / 100)
        }
    };
    var q = function() {};
    q.prototype.load = function(a) {
        this._makeRequest(a,
            function(a) {
                a ? this._parse(a) : c.events.callEvent(e.error, ["No VAST tag response"])
            }.bind(this))
    };
    q.prototype._makeRequest = function(a, b) {
        if ("https:" === g.location.protocol && 0 === a.indexOf("http://")) return b();
        try {
            var d = new XMLHttpRequest;
            d.open("GET", a);
            d.overrideMimeType && d.overrideMimeType("text/xml");
            d.onload = function() {
                return b(this.responseXML)
            };
            d.onerror = function() {
                return b()
            };
            d.send()
        } catch (c) {
            return b()
        }
    };
    q.prototype._parse = function(a) {
        this.vastParser = new n;
        (a = this.vastParser.parse(a)) ? this._applyVast(a):
            c.events.callEvent(e.error, ["No VAST tag response"])
    };
    q.prototype._applyVast = function(a) {
        if (a && a.ads && a.ads.length) {
            a = a.ads[0];
            for (var b = 0; b < a.creatives.length; b++) {
                var d = a.creatives[b],
                    f = d.mediaFiles.filter(function(a) {
                        return a.apiFramework && "vpaid" === a.apiFramework.toLowerCase() && "application/javascript" === a.type.toLowerCase() && "progressive" === a.delivery.toLowerCase()
                    });
                if (f.length) {
                    (new w(d.trackingEvents, a.impressionUrls, a.errorUrls, d.videoClicks && d.videoClicks.clickTrackingUrls)).init();
                    (new r).init(f[0],
                        d.adParameters);
                    return
                }
            }
            c.events.callEvent(e.error, ["No correct media file found"])
        }
    };
    var n = function() {
        this.parsedVast = {
            ads: [],
            errorUrls: []
        }
    };
    n.prototype.parse = function(a) {
        if (a && a.documentElement && "VAST" === a.documentElement.nodeName) return a.documentElement.childNodes.forEach(function(a) {
            "Error" === a.nodeName ? this.parsedVast.errorUrls.push(this._parseTextNode(a)) : "Ad" === a.nodeName && (a = this._parseAdNode(a)) && this.parsedVast.ads.push(a)
        }, this), this.parsedVast
    };
    n.prototype._parseTextNode = function(a) {
        return a &&
            (a.textContent || a.text || "").trim() || null
    };
    n.prototype._parseAdNode = function(a) {
        for (var b = a.childNodes, d = 0; d < b.length; d++)
            if (a = b[d], "InLine" === a.nodeName) return this._parseInlineAdNode(a)
    };
    n.prototype._parseInlineAdNode = function(a) {
        var b = {
            id: null,
            errorUrls: [],
            impressionUrls: [],
            creatives: []
        };
        a.childNodes.forEach(function(a) {
            switch (a.nodeName) {
                case "Error":
                    b.errorUrls.push(this._parseTextNode(a));
                    break;
                case "Impression":
                    b.impressionUrls.push(this._parseTextNode(a));
                    break;
                case "Creatives":
                    this._getChildNodesByName(a,
                        "Creative").forEach(function(a) {
                        a.childNodes.forEach(function(a) {
                            "Linear" === a.nodeName && (a = this._parseCreativeLinearNode(a)) && b.creatives.push(a)
                        }, this)
                    }, this)
            }
        }, this);
        return b
    };
    n.prototype._getChildNodeByName = function(a, b) {
        for (var d = 0; d < a.childNodes.length; d++)
            if (a.childNodes[d].nodeName === b) return a.childNodes[d]
    };
    n.prototype._getChildNodesByName = function(a, b) {
        var d = [];
        a.childNodes.forEach(function(a) {
            a.nodeName === b && d.push(a)
        });
        return d
    };
    n.prototype._parseCreativeLinearNode = function(a) {
        var b = {
                type: "linear",
                duration: 0,
                skipOffset: null,
                adParameters: null,
                mediaFiles: [],
                trackingEvents: {},
                videoClicks: {
                    clickThroughUrl: null,
                    clickTrackingUrls: [],
                    customClickUrls: []
                }
            },
            d = this._getChildNodeByName(a, "Duration");
        b.duration = this._parseDuration(this._parseTextNode(d));
        if (-1 === b.duration) return null;
        var c = a.getAttribute("skipoffset");
        c && (b.skipOffset = this._parseOffset(c, b.duration));
        if (d = this._getChildNodeByName(a, "VideoClicks")) b.videoClicks.clickThroughUrl = this._parseTextNode(this._getChildNodeByName(d, "ClickThrough")),
            this._getChildNodesByName(d, "ClickTracking").forEach(function(a) {
                b.videoClicks.clickTrackingUrls.push(this._parseTextNode(a))
            }, this), this._getChildNodesByName(d, "CustomClick").forEach(function(a) {
                b.videoClicks.customClickUrls.push(this._parseTextNode(a))
            }, this);
        b.adParameters = this._parseTextNode(this._getChildNodeByName(a, "AdParameters"));
        (d = this._getChildNodeByName(a, "TrackingEvents")) && this._getChildNodesByName(d, "Tracking").forEach(function(a) {
            var d = this._parseTextNode(a),
                e = a.getAttribute("event");
            e && d && ("progress" === e && a.getAttribute("offset") && (e += "-" + this._parseOffset(c, b.duration)), b.trackingEvents[e] = b.trackingEvents[e] || [], b.trackingEvents[e].push(d))
        }, this);
        a = this._getChildNodeByName(a, "MediaFiles");
        this._getChildNodesByName(a, "MediaFile").forEach(function(a) {
            a = {
                id: a.getAttribute("id"),
                url: this._parseTextNode(a),
                delivery: a.getAttribute("delivery"),
                type: a.getAttribute("type"),
                codec: a.getAttribute("codec"),
                apiFramework: a.getAttribute("apiFramework"),
                width: a.getAttribute("width") || 0,
                height: a.getAttribute("height") ||
                    0,
                bitrate: a.getAttribute("bitrate") || 0,
                minBitrate: a.getAttribute("minBitrate") || 0,
                maxBitrate: a.getAttribute("maxBitrate") || 0,
                scalable: !(!a.getAttribute("scalable") || "true" !== a.getAttribute("scalable").toLowerCase()),
                maintainAspectRatio: !(!a.getAttribute("maintainAspectRatio") || "true" !== a.getAttribute("maintainAspectRatio").toLowerCase())
            };
            b.mediaFiles.push(a)
        }, this);
        return b
    };
    n.prototype._parseDuration = function(a) {
        if (!a) return -1;
        var b = a.split(":");
        if (3 !== b.length) return -1;
        a = 3600 * parseInt(b[0], 10);
        var d = 60 * parseInt(b[1], 10),
            b = parseFloat(b[2]);
        return isNaN(a) || isNaN(d) || isNaN(b) ? -1 : a + d + b
    };
    n.prototype._parseOffset = function(a, b) {
        return a.indexOf("%") === a.length - 1 ? b * (parseInt(a, 10) / 100) : this._parseDuration(a)
    };
    var r = function() {
        this._adParameters = this._iframe = null
    };
    r.prototype.init = function(a, b) {
        var d = m.getRandomId();
        g["rtgtstartvpaid" + d] = this.startVPAID.bind(this);
        g["rtgtstartvpaiderror" + d] = this.handleError.bind(this);
        this._iframe = l.createElement("iframe");
        this._iframe.style.display = "none";
        l.body.appendChild(this._iframe);
        this._iframe.contentWindow.rtgtsrc = '<html><head><body><script>function startVPAID() {window.parent["rtgtstartvpaid' + d + '"]();};function errorVPAID() {window.parent["rtgtstartvpaiderror' + d + '"]();};\x3c/script><script onerror="errorVPAID();" onload="startVPAID();"src="' + a.url + '">\x3c/script></body></head></html>';
        this._iframe.src = "javascript:window.rtgtsrc";
        this._adParameters = b
    };
    r.prototype.handleError = function() {
        c.events.callEvent(e.error, ["No VPAID response"])
    };
    r.prototype.startVPAID = function() {
        var a =
            this._iframe.contentWindow;
        if (a = a.getVPAIDAd && "function" == typeof a.getVPAIDAd && a.getVPAIDAd()) {
            a.handshakeVersion(c.version);
            var b = this._getEventsCallbacks(),
                d;
            for (d in b) a.subscribe(b[d], d);
            c.actualVpaidAd = a;
            a.initAd(c.ad._width, c.ad._height, c.ad._viewMode, c.ad._desiredBitrate, this._adParameters ? {
                AdParameters: this._adParameters
            } : c.ad._creativeData || {}, c.ad._environmentVars)
        }
    };
    r.prototype._getEventsCallbacks = function() {
        var a = {},
            b;
        for (b in e) {
            var d = function() {
                var a = e[b];
                return function() {
                    c.events.callEvent(a,
                        arguments)
                }
            }();
            a[e[b]] = d
        }
        return a
    };
    var w = function(a, b, d, c) {
        this._trackingEvents = a;
        this._impressionUrls = b;
        this._errorUrls = d;
        this._clickTrackingUrls = c;
        this._lastVolume = !1
    };
    w.prototype.init = function() {
        c.events.subscribe(function(a) {
            var b = a.eventName;
            a = null;
            switch (b) {
                case e.impression:
                    a = this._impressionUrls;
                    break;
                case e.volumeChange:
                    b = c.actualVpaidAd && c.actualVpaidAd.getAdVolume();
                    "number" === typeof this._lastVolume && "number" === typeof b && (0 === b && 0 < this._lastVolume ? a = this._trackingEvents.mute : 0 < b && 0 ===
                        this._lastVolume && (a = this._trackingEvents.unmute));
                    this._lastVolume = b;
                    break;
                case e.clickThru:
                    a = this._clickTrackingUrls;
                    break;
                case e.error:
                    a = this._errorUrls;
                    break;
                default:
                    a = this._trackingEvents[u[b]]
            }
            a && a.length && a.forEach(function(a) {
                m.sendPixel(a)
            })
        }.bind(this))
    };
    var v = function() {
        this._events = []
    };
    v.prototype.subscribe = function(a) {
        this._events.push(a)
    };
    v.prototype.callEvent = function(a, b) {
        this._events.forEach(function(c) {
            c.call(null, {
                eventName: a,
                args: b
            })
        })
    };
    var h = function() {
        this._container = this._videoSlot =
            this._slot = this._environmentVars = this._creativeData = this._desiredBitrate = this._viewMode = this._height = this._width = null;
        this._adParameters = {};
        this._playerCallbacks = {}
    };
    h.prototype.initAd = function(a, b, d, g, k, h) {
        this._width = a;
        this._height = b;
        this._viewMode = d || "normal";
        this._desiredBitrate = g;
        this._creativeData = k;
        this._environmentVars = h;
        this._slot = h.slot;
        this._videoSlot = h.videoSlot;
        "object" === typeof k && "object" === typeof h || c.events.callEvent(e.error);
        try {
            this._adParameters = JSON.parse(k.AdParameters)
        } catch (l) {
            c.events.callEvent(e.error)
        }
        this._handleVpaidEvents();
        this._setAdContainer();
        this._adParameters.externalVastUrl ? (this._vastLoader = new q, this._vastLoader.load(this._adParameters.externalVastUrl)) : (c.actualVpaidAd = new f, c.actualVpaidAd.init(this._width, this._height, this._viewMode, this._desiredBitrate, this._adParameters, this._slot, this._videoSlot, this._container))
    };
    h.prototype._setAdContainer = function() {
        this._slot && 1 === this._slot.nodeType || (this._slot = l.body);
        this._container = l.createElement("div");
        this._container.id = m.getRandomId("rtgt-");
        this._container.setAttribute("style",
            "position: absolute; width: 100%; height: 100%;");
        this._adParameters.externalVastUrl || (this._container.style.zIndex = 100);
        this._slot.appendChild(this._container)
    };
    h.prototype.handshakeVersion = function() {
        return c.version
    };
    h.prototype.resizeAd = function(a, b, d) {
        c.actualVpaidAd && c.actualVpaidAd.resizeAd(a, b, d);
        this._container.style.width = a + "px";
        this._container.style.height = b + "px"
    };
    h.prototype.startAd = function() {
        c.actualVpaidAd && c.actualVpaidAd.startAd()
    };
    h.prototype.stopAd = function() {
        c.actualVpaidAd && c.actualVpaidAd.stopAd()
    };
    h.prototype.pauseAd = function() {
        c.actualVpaidAd && c.actualVpaidAd.pauseAd()
    };
    h.prototype.resumeAd = function() {
        c.actualVpaidAd && c.actualVpaidAd.resumeAd()
    };
    h.prototype.expandAd = function() {
        c.actualVpaidAd && c.actualVpaidAd.expandAd()
    };
    h.prototype.collapseAd = function() {
        c.actualVpaidAd && c.actualVpaidAd.collapseAd()
    };
    h.prototype.skipAd = function() {
        c.actualVpaidAd && c.actualVpaidAd.skipAd()
    };
    h.prototype.setAdVolume = function(a) {
        c.actualVpaidAd && c.actualVpaidAd.setAdVolume(a)
    };
    h.prototype.getAdVolume = function() {
        return c.actualVpaidAd ?
            c.actualVpaidAd.getAdVolume() : 1
    };
    h.prototype.getAdDuration = function() {
        return c.actualVpaidAd ? c.actualVpaidAd.getAdDuration() : -2
    };
    h.prototype.getAdLinear = function() {
        return c.actualVpaidAd && c.actualVpaidAd.getAdLinear()
    };
    h.prototype.getAdWidth = function() {
        return c.actualVpaidAd && c.actualVpaidAd.getAdWidth()
    };
    h.prototype.getAdHeight = function() {
        return c.actualVpaidAd && c.actualVpaidAd.getAdHeight()
    };
    h.prototype.getAdRemainingTime = function() {
        return c.actualVpaidAd ? c.actualVpaidAd.getAdRemainingTime() : -2
    };
    h.prototype.getAdExpanded = function() {
        return c.actualVpaidAd && c.actualVpaidAd.getAdExpanded()
    };
    h.prototype.getAdSkippableState = function() {
        return c.actualVpaidAd && c.actualVpaidAd.getAdSkippableState()
    };
    h.prototype.getAdIcons = function() {
        return c.actualVpaidAd && c.actualVpaidAd.getAdIcons()
    };
    h.prototype.getAdCompanions = function() {
        return c.actualVpaidAd && c.actualVpaidAd.getAdCompanions ? c.actualVpaidAd.getAdCompanions() : ""
    };
    h.prototype.subscribe = function(a, b, c) {
        var e = this._playerCallbacks[b] || [];
        e.push({
            fn: a,
            context: c || null
        });
        this._playerCallbacks[b] = e
    };
    h.prototype.unsubscribe = function(a, b) {
        for (var c = this._playerCallbacks[b] || [], e = 0, f = c.length || 0; e < f; e++)
            if (c[e].fn === a) {
                c.splice(e, 1);
                return
            } this._playerCallbacks[b] = c
    };
    h.prototype._sendLocation = function() {
        var a = "";
        try {
            a = g.top.location.href
        } catch (b) {
            a = (a = g.location.ancestorOrigins) && a.length ? a[a.length - 1] : m.getTopmostWindow().document.referrer
        }
        var c = "string" === typeof this._videoSlot.nodeName && "number" === typeof this._videoSlot.nodeType ? this._videoSlot : this._slot;
        if (0 === c.clientWidth || 0 === c.clientHeight) c = this._container;
        c = c.clientWidth + "x" + c.clientHeight;
        a = [this._adParameters.urlParameters.ssp, this._adParameters.urlParameters.rid, encodeURIComponent(a), c].join(";");
        m.sendPixel("https://tag.rutarget.ru/tag?event=addToSegment&name=__imp_url&value=" + a)
    };
    h.prototype._trackProgress = function() {
        var a = this._adParameters.progress,
            b = this._adParameters.progressLinks;
        if (a && b && b.length) {
            var c = this.getAdDuration();
            this._progressInterval = setInterval(function() {
                if (c - this.getAdRemainingTime() >=
                    a - .25) {
                    clearInterval(this._progressInterval);
                    var e = "viewable" === this._viewabilityDetector.getViewabilityState();
                    b.forEach(function(a) {
                        a += e && a.includes("rutarget.ru") ? "&viewable=true" : "";
                        m.sendPixel(a)
                    })
                }
            }.bind(this), 200)
        }
    };
    h.prototype._handleVpaidEvents = function() {
        c.events.subscribe(function(a) {
            var b = a.eventName,
                d = a.args;
            a = [];
            var f = "";
            switch (b) {
                case e.loaded:
                    this._viewabilityDetector = new k(this._container, this._adParameters.adEventsTrackers.view);
                    this._viewabilityDetector.init();
                    break;
                case e.videoStart:
                    this._viewabilityDetector.start();
                    this._sendLocation();
                    this._trackProgress();
                    break;
                case e.playing:
                    this._viewabilityDetector.start();
                    break;
                case e.stopped:
                case e.paused:
                    this._viewabilityDetector.stop();
                    break;
                case e.skipped:
                    this._viewabilityDetector.stop();
                    a = this._adParameters.adEventsTrackers.playback.skip;
                    break;
                case e.clickThru:
                    this._adParameters.externalVastUrl && (a = [this._adParameters.adEventsTrackers.clickThrough + "&response=pixel"]);
                    a = a.concat(this._adParameters.adEventsTrackers.clickTracking);
                    break;
                case e.sizeChange:
                    this._viewabilityDetector.onResize()
            }
            if (void 0 !==
                u[b]) a = this._adParameters.adEventsTrackers.playback[u[b]];
            else if (b === e.volumeChange) {
                var g = c.actualVpaidAd && c.actualVpaidAd.getAdVolume();
                "number" === typeof this._lastVolume && "number" === typeof g && (0 === g && 0 < this._lastVolume ? a = this._adParameters.adEventsTrackers.playback.mute : 0 < g && 0 === this._lastVolume && (a = this._adParameters.adEventsTrackers.playback.unmute));
                this._lastVolume = g
            }
            void 0 !== y[b] && "viewable" === this._viewabilityDetector.getViewabilityState() && (f = "&viewable=true");
            a && a.length && a.forEach(function(a) {
                a.includes("rutarget.ru") &&
                    (a += f);
                m.sendPixel(a)
            });
            setTimeout(function() {
                var a = this._playerCallbacks[b];
                a && a.length && a.forEach(function(a) {
                    a.fn.apply(a.context, d)
                })
            }.bind(this), 100)
        }.bind(this))
    };
    var f = function() {
        this._attributes = new x(c.events.callEvent.bind(c.events));
        this._container = this._slot = null;
        this._video = {
            slot: null,
            states: {
                loaded: !1,
                inited: !1,
                started: !1,
                paused: !1,
                stoped: !1,
                progressed: !1
            },
            lastEventIndex: 0,
            progressEvents: [{
                event: e.videoFirstQuartile,
                value: .25
            }, {
                event: e.videoMidpoint,
                value: .5
            }, {
                event: e.videoThirdQuartile,
                value: .75
            }]
        }
    };
    f.prototype.init = function(a, b, d, f, g, h, k, l) {
        this._attributes.size = {
            width: a,
            height: b
        };
        this._attributes.viewMode = d;
        this._attributes.desiredBitrate = f;
        this._adParameters = g;
        this._slot = h;
        this._video.slot = k;
        this._container = l;
        this._updateSlots();
        this._setMediaFiles() || c.events.callEvent(e.error);
        this._renderSkippableButton();
        this._addVideoEventListeners();
        c.events.callEvent(e.loaded)
    };
    f.prototype._updateSlots = function() {
        this._video.slot || (this._video.slot = l.createElement("video"), this._container.appendChild(this._video.slot));
        try {
            this._video.slot.setAttribute("webkit-playsinline", "playsinline")
        } catch (a) {}
    };
    f.prototype._updateSize = function() {
        try {
            this._video.slot.style.width = this._attributes.size.width + "px", this._video.slot.style.height = this._attributes.size.height + "px"
        } catch (a) {}
    };
    f.prototype._setMediaFiles = function() {
        for (var a = this._adParameters.videos || [], b = 0; b < a.length; b++)
            if (this._video.slot.canPlayType(a[b].type)) return this._video.slot.setAttribute("src", a[b].url), !0;
        return !1
    };
    f.prototype._showSkip = function() {
        return this._adParameters.showSkip
    };
    f.prototype._renderSkippableButton = function() {
        this._showSkip() && (this._skippableButton = l.createElement("div"), this._skippableButton.id = m.getRandomId("rtgt-"), this._skippableButton.setAttribute("style", "position: absolute; right: 0; bottom: 22px; padding: 10px 15px;font-family: Arial; font-size: 11px; line-height: 11px; color: #e6e6e6;background: rgba(0,0,0,0.8); cursor: default; z-index: 1000; display: none;"), this._skippableButtonText = l.createElement("span"), this._container.appendChild(this._skippableButton),
            this._skippableButton.appendChild(this._skippableButtonText))
    };
    f.prototype._renderPlayButton = function() {
        this._playButtonWrapper = l.createElement("div");
        this._playButtonWrapper.setAttribute("style", "width: 100%; height: 100%; position: absolute; left: 0; bottom: 0; z-index: 1000; background: rgba(0,0,0,0.7);");
        this._playButton = l.createElement("div");
        this._playButton.setAttribute("style", "width: 64px; height: 64px; position: absolute; margin: 0 0 -32px -32px;left: 50%; bottom: 50%; cursor: pointer; z-index: 1000;");
        this._playButton.style.background = "url(https://cdn.rutarget.ru/static/vpaid/play.svg)";
        this._container.appendChild(this._playButtonWrapper);
        this._playButtonWrapper.appendChild(this._playButton);
        this._playButton.addEventListener("click", this.startAd.bind(this))
    };
    f.prototype._renderMuteButton = function() {
        this._muteButton = l.createElement("div");
        this._muteButton.setAttribute("style", "width: 32px; height: 32px; position: absolute; left: 15px; bottom: 15px; cursor: pointer; z-index: 1000;");
        this._muteButton.style.background =
            "url(https://cdn.rutarget.ru/static/vpaid/mute.svg)";
        this._container.appendChild(this._muteButton);
        this._muteButton.addEventListener("click", function(a) {
            a.stopPropagation();
            this._switchMute()
        }.bind(this))
    };
    f.prototype._switchMute = function() {
        0 === this._attributes.volume ? (this.setAdVolume(1), this._muteButton.style.background = "url(https://cdn.rutarget.ru/static/vpaid/volume.svg)") : (this.setAdVolume(0), this._muteButton.style.background = "url(https://cdn.rutarget.ru/static/vpaid/mute.svg)")
    };
    f.prototype._addVideoEventListeners =
        function() {
            this._container.addEventListener("click", this._overlayOnClick.bind(this), !1);
            this._video.slot.addEventListener("timeupdate", function(a) {
                !this._video.states.inited && a.target.duration && (this._video.states.inited = !0, this._attributes.duration = a.target.duration, c.events.callEvent(e.started), c.events.callEvent(e.impression), c.events.callEvent(e.videoStart));
                this._timeUpdateHandler(a)
            }.bind(this));
            this._video.slot.addEventListener("play", function(a) {
                this._video.states.inited && c.events.callEvent(e.playing)
            }.bind(this));
            this._video.slot.addEventListener("pause", function(a) {
                .98 <= a.target.currentTime / a.target.duration || c.events.callEvent(e.paused)
            }.bind(this));
            this._video.slot.addEventListener("ended", function(a) {
                c.events.callEvent(e.videoComplete);
                this.stopAd()
            }.bind(this));
            this._video.slot.addEventListener("error", function(a) {
                c.events.callEvent(e.error);
                this.stopAd()
            }.bind(this))
        };
    f.prototype._overlayOnClick = function() {
        c.events.callEvent(e.clickThru, [this._adParameters.adEventsTrackers.clickThrough || null, null, !0])
    };
    f.prototype._timeUpdateHandler = function(a) {
        this._attributes.remainingTime = a.target.duration - a.target.currentTime;
        this._updateSkippableButton(a.target.currentTime);
        if (!(this._video.lastEventIndex >= this._video.progressEvents.length)) {
            var b = this._video.progressEvents[this._video.lastEventIndex];
            a.target.currentTime / a.target.duration >= b.value && (c.events.callEvent(b.event), this._video.lastEventIndex++)
        }
    };
    f.prototype._updateSkippableButton = function(a) {
        this._showSkip() && (5 <= a ? this._attributes.skippableState ||
            (this._attributes.skippableState = !0, this._skippableButtonText.innerHTML = "РџСЂРѕРїСѓСЃС‚РёС‚СЊ", this._skippableButton.style.cursor = "pointer", this._skippableButton.addEventListener("click", function(a) {
                a.stopPropagation();
                this.skipAd()
            }.bind(this))) : this._skippableButtonText.innerHTML = ["РџСЂРѕРїСѓСЃС‚РёС‚СЊ С‡РµСЂРµР·", 5 - Math.floor(a), "СЃ"].join(" "))
    };
    f.prototype._startAdVideo = function() {
        this._video.states.started = !0;
        this._skippableButton && (this._skippableButton.style.display = "block");
        this._playButtonWrapper && (this._playButtonWrapper.style.display =
            "none")
    };
    f.prototype._destroy = function() {
        this._slot.removeChild(this._container)
    };
    f.prototype.resizeAd = function(a, b, c) {
        this._attributes.size = {
            width: a,
            height: b
        };
        this._attributes.viewMode = c;
        this._updateSize()
    };
    f.prototype.startAd = function() {
        if (!this._video.states.started) {
            this._video.states.loaded || (this._video.states.loaded = !0);
            var a = this._video.slot.play();
            void 0 !== a ? a.then(this._startAdVideo.bind(this))["catch"](function() {
                    this.setAdVolume(0);
                    this._video.slot.muted = !0;
                    this._renderMuteButton();
                    this._video.slot.play().then(this._startAdVideo.bind(this))["catch"](this._renderPlayButton.bind(this))
                }.bind(this)) :
                this._startAdVideo()
        }
    };
    f.prototype.stopAd = function() {
        this._video.states.started && !this._video.states.stopped && (this._video.states.stopped = !0, this._video.slot.pause(), this._destroy(), setTimeout(c.events.callEvent.bind(c.events), 100, [e.stopped]))
    };
    f.prototype.pauseAd = function() {
        this._video.states.paused || !this._video.states.started || .98 <= this._video.slot.currentTime / this._video.slot.duration || (this._video.states.paused = !0, this._video.slot.pause())
    };
    f.prototype.resumeAd = function() {
        if (this._video.states.paused ||
            this._video.slot.paused) {
            this._video.states.paused = !1;
            var a = this._video.slot.play();
            void 0 !== a && a["catch"](function() {
                this.setAdVolume(0);
                this._video.slot.muted = !0;
                this._renderMuteButton();
                this._video.slot.play()
            }.bind(this))
        }
    };
    f.prototype.expandAd = function() {};
    f.prototype.collapseAd = function() {};
    f.prototype.skipAd = function() {
        !this._attributes.skippableState && this._adParameters.showSkip || !this._adParameters.skippable || !this._video.states.started || this._video.states.stopped || (this._video.states.stopped = !0, this._video.slot.pause(), this._destroy(), setTimeout(function() {
            c.events.callEvent(e.skipped);
            c.events.callEvent(e.stopped)
        }.bind(this), 100))
    };
    f.prototype.setAdVolume = function(a) {
        this._attributes.volume = a;
        try {
            this._video.slot.volume = this._attributes.volume
        } catch (b) {}
    };
    f.prototype.getAdVolume = function() {
        return this._attributes.volume
    };
    f.prototype.getAdDuration = function() {
        return this._attributes.duration
    };
    f.prototype.getAdLinear = function() {
        return this._attributes.linear
    };
    f.prototype.getAdWidth = function() {
        return this._attributes.size.width
    };
    f.prototype.getAdHeight = function() {
        return this._attributes.size.height
    };
    f.prototype.getAdRemainingTime = function() {
        return this._attributes.remainingTime
    };
    f.prototype.getAdExpanded = function() {
        return this._attributes.expanded
    };
    f.prototype.getAdSkippableState = function() {
        return this._attributes.skippableState
    };
    f.prototype.getAdIcons = function() {
        return this._attributes.icons
    };
    f.prototype.getAdCompanions = function() {
        return this._attributes.companions
    };
    var c = {
        ad: null,
        actualVpaidAd: null,
        version: "2.0",
        events: null,
        playerCallbacks: {}
    };
    g.getVPAIDAd = function() {
        c.ad || (c.ad = new h, c.events = new v);
        return c.ad
    }
})(window, document);
