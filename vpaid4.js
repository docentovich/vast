(function(window, document) {

  function informer(erid, container) {
    if(!Boolean(erid)) {
      return;
    }

    function renderInformer() {

      function sanitize (str) {
        return str
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
      }
      var bannerName = 'РЕКЛАМА SEGMENTO';
      erid = sanitize(erid);

      var css = `
          body {
                position: relative;
          }
    
         /* svg */
         .informer svg {
                width: 100%;
                height: 100%;
         }
          
          /* informer */
          .informer {
                width: 18px;
                height: 18px;
                top: 0px;
                right: 0px;
                padding: 2px;
                box-sizing: border-box;
                display: flex;
                position: absolute;
                border-radius: 100%;
                background: rgba(0, 0, 0, 0.4);
          }
          
          .opened .informer {
            display: none;
          }
    
          /* wrapper */
          .wrapper {
               position: absolute;
               top: 3px;
               right: 3px;
               width: 36px;
               height: 36px;
               max-width: 400px;
               cursor: pointer;
          }
          .opened.wrapper {
            width: auto;
            height: auto
          }
          /* popup */
          .popup {
             display: none;
             padding: 6px 18px 6px 6px;
             flex-direction: column;
             align-items: flex-start;
             gap: 6px;
             width: auto;
             max-width: 100%;
             max-height: 100%;
             border-radius: 9px;
             background: #404040;
          }
          
          .opened .popup {
            display: flex;
          }

           .popup h2 {
              padding: 0;
              margin: 0;
              color: #FFF;
              font-family: 'Roboto', sans-serif;
              font-size: 11px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
              letter-spacing: 1px;
              text-transform: uppercase;
           }

           .popup .erid {
              color: #FFF;
              font-family: 'Roboto', sans-serif;
              font-size: 8px;
              font-style: normal;
              font-weight: 400;
              line-height: normal;
              max-width: 100%;
              word-wrap: break-word;
           }

           .popup .close {
              position: absolute;
              top: 5px;
              right: 5px;
              cursor: pointer;
           }
    `;

      // styles
      var style = document.createElement("style");

      style.type = "text/css";
      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        style.appendChild(document.createTextNode(css));
      }

      // svg
      var svg = `
<svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<g id="Leading-icon">
<path id="Vector" d="M6.41673 4.0833H7.5834V5.24997H6.41673V4.0833ZM6.41673 6.41663H7.5834V9.91663H6.41673V6.41663ZM7.00007 1.16663C3.78007 1.16663 1.16673 3.77997 1.16673 6.99997C1.16673 10.22 3.78007 12.8333 7.00007 12.8333C10.2201 12.8333 12.8334 10.22 12.8334 6.99997C12.8334 3.77997 10.2201 1.16663 7.00007 1.16663ZM7.00007 11.6666C4.42757 11.6666 2.3334 9.57247 2.3334 6.99997C2.3334 4.42747 4.42757 2.3333 7.00007 2.3333C9.57257 2.3333 11.6667 4.42747 11.6667 6.99997C11.6667 9.57247 9.57257 11.6666 7.00007 11.6666Z" fill="white"/>
</g>
</svg>`;

      // informer
      var informer = document.createElement("div");
      informer.classList.add("informer");
      informer.insertAdjacentHTML("afterbegin", svg);

      // popup
      var popup = document.createElement("div");
      popup.classList.add("popup", "hidden");
      popup.insertAdjacentHTML(
          "afterbegin",
          `
<h2>` + bannerName + `</h2>
<div class="close">
<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
<path d="M11.0833 3.73919L10.2608 2.91669L6.99996 6.17752L3.73913 2.91669L2.91663 3.73919L6.17746 7.00002L2.91663 10.2609L3.73913 11.0834L6.99996 7.82252L10.2608 11.0834L11.0833 10.2609L7.82246 7.00002L11.0833 3.73919Z" fill="white"/>
</svg>
</div>
<div class="erid">ERID: ` + erid + `</div>`);
      popup.querySelector(".close").addEventListener("click", function(event) {
        event.stopPropagation();
        wrapper.classList.remove("opened");
        wrapper.addEventListener("click", clickHandler);
      });

      // wrapper
      var wrapper = document.createElement("div");
      wrapper.classList.add("wrapper");
      wrapper.appendChild(informer);
      wrapper.appendChild(popup);

      var clickHandler = function(event) {
        event.stopPropagation();
        wrapper.classList.add("opened");
        wrapper.removeEventListener("click", clickHandler);
      }

      wrapper.addEventListener("click", clickHandler);

      function appendElements() {
        if (!container) {
          container = document.body;
        }
        container.appendChild(style);
        setTimeout(function () {
          container.appendChild(wrapper);
        })
      }

      setTimeout(appendElements);
    }
    renderInformer();
  }

  function carousel(container) {
    const offers = [
      {
        img: 'https://cs.p-static.ru/image/14043740/original-600x600-fit.jpg',
        text: 'Гвозди строительные 4,0x100 мм',
        url: 'https://moscow.petrovich.ru/product/101819/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://cs.p-static.ru/image/5589868/original-600x600-fit.jpg',
        text: 'Молоток плиточника Hesler',
        url: 'https://moscow.petrovich.ru/product/104829/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://cs.p-static.ru/image/52114393/original-600x600-fit.jpg',
        text: 'Штукатурка гипсовая Knauf',
        url: 'https://moscow.petrovich.ru/product/106958/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://cs.p-static.ru/image/12079142/original-600x600-fit.jpg',
        text: 'Гидроизоляция Унифлекс',
        url: 'https://moscow.petrovich.ru/product/108977/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://cs.p-static.ru/image/55424965/original-600x600-fit.jpg',
        text: 'Гипсокартон влагостойкий',
        url: 'https://moscow.petrovich.ru/product/101937/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://cs.p-static.ru/image/46298060/original-600x600-fit.jpg',
        text: 'Шумоизоляция Роквул',
        url: 'https://moscow.petrovich.ru/product/106934/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://cs.p-static.ru/image/46298060/original-600x600-fit.jpg',
        text: 'Грунт Церезит СТ17 PRO',
        url: 'https://moscow.petrovich.ru/product/109243/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://cs.p-static.ru/image/5822259/original-600x600-fit.jpg',
        text: 'Кабель Кабэкс ВВГПнг(А)-LS',
        url: 'https://moscow.petrovich.ru/product/103101/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://https://cs.p-static.ru/image/14791283/original-600x600-fit.jpg',
        text: 'Клей для плитки',
        url: 'https://moscow.petrovich.ru/product/106169/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
      {
        img: 'https://cs.p-static.ru/image/15921782/original-600x600-fit.jpg',
        text: 'ЭППС Пеноплэкс Комфорт',
        url: 'https://moscow.petrovich.ru/product/170040/?utm_source=segmento&utm_medium=cpm&utm_campaign=shoppable_ads_gvozd_msc_cfo&utm_id=segmento_shoppable_ads_gvozd_msc_cfo',
      },
    ];

    const FEED_WIDTH = 354;
    const FEED_WIDTH_STRING = `${FEED_WIDTH}px`;
    const OFFER_GAP = 8;
    const OFFER_WIDTH = 74;
    const OFFER_WIDTH_STRING = OFFER_WIDTH + 'px';

    const styles = `
      .feed {
        box-sizing: border-box;
        top: 0px;
        left: 0px;
        overflow-x: hidden;
        width: ${FEED_WIDTH_STRING};
        padding: 0 4px;
        margin: auto;
      }
      
      .feed .feed__wrapper-outer {
        transition: transform 0.2s ease;
      }
      
      .feed .feed__wrapper {
        display: flex;
        flex-direction: row;
        transition: transform 0.2s ease;
        width: 100%;
        padding: ${OFFER_GAP}px;
        column-gap: ${OFFER_GAP}px;
        transform: translateY(-50%);
      }
      
      .feed:hover .feed__wrapper {
        transform: translateY(0%);  
      }
      
      
      .feed .feed__arrow {
        top: 10px;
        position: absolute;
        cursor: pointer;
      }
      
      .feed .feed__arrow:after {
        content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='currentColor' viewBox='0 0 330 330'%3E%3Cpath d='M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z'/%3E%3C/svg%3E");
        display: block;
        width: 14px;
        height: 14px;
        background: white;
        padding: 6px;
        border-radius: 100%;
      }
      
      .feed .feed__arrow--left {
        left: 4px;
        transform: rotate(180deg);
      }
      
      .feed .feed__arrow--right {
        right: 4px;
      }

      .offer {
        flex: 0 0 ${OFFER_WIDTH_STRING};
        box-sizing: border-box;
        padding: 4px;
        display: flex;
        flex-direction: column;
        row-gap: 10px;
        font-family: Helvetica, sans-serif;
        text-decoration: unset;
        border-radius: 7px;
         background: #0000006e;
      }
      
      .offer:hover {
        background: #000000bf;
      } 
      
      .offer .offer__inner {
        cursor: pointer;
        height: 80px;
        position: relative;
        background: white;
        border-radius: 7px;
        display: flex;
        box-shadow: 0 3px 4px 0px #393939;
       
      }
      
      .offer:hover .offer__inner {
        box-shadow: none;
      }
      
      .offer .offer__img {
        width: 100%;
        height: auto;
        object-fit: contain;
      }
      
      .offer .offer__discount {
        top: 10px;
        left: -4px;
        position: absolute;
        width: auto;
        padding: 4px;
        background: red;
        border-radius: 5px;
        color: white;
        font-size: 12px;
      }
      
      .offer .offer__price {
        width: auto;
        padding: 4px;
        position: absolute;
        background: #ddd4d4;
        border-radius: 5px;
        bottom: 5px;
        left: 5px;
        color: white;
        font-size: 12px;
      }
      
      .offer .offer__description {
         width: 100%;
         color: white;
         font-size: 10px;
      }
    `;

    let leftElOffset = 0;

    const { createEl } = utils;
    const feedEl =  createEl({ classList: ['feed'], styles });
    const feedWrapperOuterEl =  createEl({ classList: ['feed__wrapper-outer'], parent: feedEl,
      attributes: [['transform', 'translateX(0px)']]
    });
    const feedWrapperEl =  createEl({ classList: ['feed__wrapper'], parent: feedWrapperOuterEl,
    });
    const left = createEl({ classList: ['feed__arrow', 'feed__arrow--left'], parent: feedEl });
    const right = createEl({ classList: ['feed__arrow', 'feed__arrow--right'], parent: feedEl });

    for(const offer of offers) {
      createOffer(offer, feedWrapperEl);
    }

    left.addEventListener('click', move(-1));
    right.addEventListener('click', move(1));

    function move(direction) {
      return function () {
        let nextLeftOffset = leftElOffset + direction * (OFFER_WIDTH + OFFER_GAP);

        if(nextLeftOffset < 0) {
          nextLeftOffset = 0;
        } else if((nextLeftOffset + feedWrapperOuterEl.offsetWidth) > feedWrapperOuterEl.scrollWidth) {
          nextLeftOffset = feedWrapperOuterEl.scrollWidth - feedWrapperOuterEl.offsetWidth;
        }

        leftElOffset = nextLeftOffset;
        feedWrapperOuterEl.style.transform = `translateX(-${leftElOffset}px)`;
      }
    }

    container.appendChild(feedEl);

    function createOffer(offer, wrapperEl) {
      const offerEl = createEl({ classList: ['offer'], parent: wrapperEl, tagName: 'a',
        attributes: [['href', offer.url], ['target', '_blank']]
      });
      const offerInner = createEl({
        classList: ['offer__inner'],
        parent: offerEl,
      });
      createEl({ classList: ['offer__img'], tagName: 'img', parent: offerInner, attributes: [['src', offer.img]] });
      if(offer.discount) {
        createEl({ classList: ['offer__discount'], parent: offerInner, html: offer.discount });
      }
      if(offer.price) {
        createEl({ classList: ['offer__price'], parent: offerInner, html: offer.price + ' ₽' });
      }
      createEl({ classList: ['offer__description'], parent: offerEl, html: offer.text });
    }

  }

  var RUTARGET_DOMAIN = 'rutarget.ru';
  var REPORT_URL = 'https://tag.rutarget.ru/tag';
  var RESOURCE_URL = 'https://cdn.rutarget.ru/static/vpaid/';

  // viewability is 50% of the video are in view for 2 seconds
  var VIEWABILITY_PARAMS = {
    percent: 50,
    duration: 2000,
    delay: 250, // interval for checking viewability
    gridSize: 64, // for IE
    states: {
      viewable: 'viewable',
      notViewable: 'notViewable',
      undetermined: 'undetermined'
    }
  };

  var VIEWABILITY_METHODS = {
    INTERSECTION: 'Intersection Observer',
    MOZ_INNER_SCREEN: 'mozInnerScreen',
    REQUEST_ANIMATION_FRAME: 'Request animation frame',
    ELEMENT_FROM_POINT: 'Element from point',
    BOUNDING_CLIENT_RECT: 'Bounding client rect'
  };

  // video ad position on the page
  var AD_POSITION = {
    onPage: 'onPage',
    sFrame: 'sameDomainFrame',
    xFrame: 'crossDomainFrame'
  };

  var SKIPPABLE_TEXT = {
    waiting: {
      prefix: 'Пропустить через',
      suffix: 'с'
    },
    skip: 'Пропустить'
  };

  var PIXEL_TYPE = {
    img: 'img',
    iframe: 'iframe'
  };

  // events dispatched by video ad to the video player
  var AD_EVENTS = {
    // click tracker
    clickThru: 'AdClickThru',
    // ad duration has changed (normally it shouldn't be for linear ad)
    // + when remainingTime has changed (AdRemainingTimeChange event deprecated in vpaid 2.0)
    durationChange: 'AdDurationChange',
    // fatal error, ad stopped
    error: 'AdError',
    // expanded state changes
    expandedChange: 'AdExpandedChange',
    // user-visible phase of the ad has begun (fired with AdStart event)
    impression: 'AdImpression',
    // any interaction with the ad EXCEPT ad clickthroughs
    interaction: 'AdInteraction',
    // ad unit has changed playback mode
    linearChange: 'AdLinearChange',
    // ad loaded and ready for display - initAd()
    loaded: 'AdLoaded',
    // send debugging information
    log: 'AdLog',
    // pauseAd()
    paused: 'AdPaused',
    // resumeAd()
    playing: 'AdPlaying',
    // resizeAd()
    sizeChange: 'AdSizeChange',
    // skipAd()
    skipped: 'AdSkipped',
    // startAd()
    started: 'AdStarted',
    // stopAd()
    stopped: 'AdStopped',
    // changed skippable state
    skippableStateChange: 'AdSkippableStateChange',
    // indicates user-initiated action
    userAcceptInvitation: 'AdUserAcceptInvitation',
    userClose: 'AdUserClose',
    userMinimize: 'AdUserMinimize',
    // video ad progress 0%
    videoStart: 'AdVideoStart',
    // video ad progress 25%
    videoFirstQuartile: 'AdVideoFirstQuartile',
    // video ad progress 50%
    videoMidpoint: 'AdVideoMidpoint',
    // video ad progress 75%
    videoThirdQuartile: 'AdVideoThirdQuartile',
    // video ad progress 100%
    videoComplete: 'AdVideoComplete',
    // volume changes
    volumeChange: 'AdVolumeChange'
  };

  var TRACKING_EVENTS = {
    AdSkipped: 'skip',
    AdStarted: 'creativeView',
    AdVideoStart: 'start',
    AdVideoFirstQuartile: 'firstQuartile',
    AdVideoMidpoint: 'midpoint',
    AdVideoThirdQuartile: 'thirdQuartile',
    AdVideoComplete: 'complete',
    AdUserAcceptInvitation: 'acceptInvitation',
    AdUserMinimize: 'collapse',
    AdUserClose: 'close',
    AdPaused: 'pause',
    AdPlaying: 'resume',
    AdError: 'error'
  };

  var VIEWABILITY_EVENTS = {
    AdVideoStart: 'start',
    AdVideoFirstQuartile: 'firstQuartile',
    AdVideoMidpoint: 'midpoint',
    AdVideoThirdQuartile: 'thirdQuartile',
    AdVideoComplete: 'complete'
  };

  var utils = {
    getRandomId: function(prefix) {
      prefix = prefix || '';
      return prefix + Math.floor(Math.random() * 1e13);
    },
    jsonToQueryString: function(json) {
      return '?' +
          Object.keys(json).map(function(key) {
            return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
          }).join('&');
    },
    getElementWindow: function(element) {
      var doc = element.ownerDocument;
      return doc.defaultView || doc.parentWindow;
    },
    getTopmostWindow: function() {
      var topmostWindow = window;

      try {
        while (topmostWindow.parent !== topmostWindow) {
          if (topmostWindow.parent.document) {
            topmostWindow = topmostWindow.parent;
          }
        }

        return topmostWindow;
      }
      catch (err) {
        return topmostWindow;
      }
    },
    sendCustomEvent: function(params) {
      params.__r = utils.getRandomId();
      var url = REPORT_URL + utils.jsonToQueryString(params);
      utils.sendPixel(url);
    },
    sendPixel: function(url, pixelType) {
      if (!url) {
        return;
      }

      pixelType = pixelType || PIXEL_TYPE.img;
      var pixel = document.createElement(pixelType);
      pixel.width = 1;
      pixel.height = 1;
      pixel.style.display = 'none';
      pixel.src = url;

      if (pixelType === PIXEL_TYPE.img) {
        pixel.alt = '';
      }

      document.body.insertBefore(pixel, document.body.firstChild);
    },
    getQueryParams: function(url) {
      var queryString = url.split('?')[1];
      if (!queryString) {
        return null;
      }

      var queryArray = queryString.split('&');
      return queryArray.reduce(function(params, element) {
        var param = element.split('=');
        if (param[0]) {
          params[param[0]] = decodeURIComponent(param[1]);
        }
        return params;
      }, {});
    },
    isIE: function() {
      return navigator.appName === 'Microsoft Internet Explorer' && navigator.userAgent.indexOf('MSIE') > -1 ||
          navigator.appName === 'Netscape' && navigator.userAgent.indexOf('Trident') > -1;
    },
    isSafari: function() {
      return navigator.userAgent.indexOf('Safari') > -1 && navigator.vendor.indexOf('Apple') > -1;
    },
    createEl: function({
                         classList = [],
                         tagName = 'div',
                         parent = null,
                         attributes = [],
                         styles = null,
                         html = null
                       }) {
      const el = document.createElement(tagName);
      el.classList.add(...classList);

      for(const attribute of attributes) {
        el.setAttribute(attribute[0], attribute[1]);
      }

      if(parent) {
        parent.appendChild(el);
      }

      if(styles) {
        var style = document.createElement("style");

        style.type = "text/css";
        if (style.styleSheet) {
          style.styleSheet.cssText = styles;
        } else {
          style.appendChild(document.createTextNode(styles));
        }

        document.body.appendChild(style);
      }

      if(html) {
        el.insertAdjacentHTML("afterbegin", html);
      }

      return el;
    }
  };

  // class for tracking video ad viewability
  var ViewabilityDetector = function(container, viewabilityPixelUrl) {
    // HTML element on the page in which the video ad is to be rendered
    this._container = container;
    this._containerWindow = utils.getElementWindow(this._container);
    this._viewabilityPixelUrl = viewabilityPixelUrl;
    this._position = this._getPosition();
    this._timeInView = 0;
    this._viewabilityDetected = false;
    this._checkingMethod = this._getCheckingMethod();
    this.getViewabilityState = null;
  };

  ViewabilityDetector.prototype._getCheckingMethod = function() {
    if (window.IntersectionObserver) {
      return VIEWABILITY_METHODS.INTERSECTION;
    }

    if (window.mozInnerScreenY && window.mozInnerScreenX && this._position !== AD_POSITION.onPage) {
      return VIEWABILITY_METHODS.MOZ_INNER_SCREEN;
    }

    if (utils.isIE()) {
      return VIEWABILITY_METHODS.ELEMENT_FROM_POINT;
    }

    if (window.requestAnimationFrame) {
      return VIEWABILITY_METHODS.REQUEST_ANIMATION_FRAME;
    }

    if (this._position !== AD_POSITION.xFrame) {
      return VIEWABILITY_METHODS.BOUNDING_CLIENT_RECT;
    }
  };

  ViewabilityDetector.prototype.init = function() {
    switch (this._checkingMethod) {
      case VIEWABILITY_METHODS.INTERSECTION:
        this._initIntersectionObserver();
        break;
      case VIEWABILITY_METHODS.MOZ_INNER_SCREEN:
        this._initMozChecker();
        break;
      case VIEWABILITY_METHODS.ELEMENT_FROM_POINT:
        this._initIEChecker();
        break;
      case VIEWABILITY_METHODS.REQUEST_ANIMATION_FRAME:
        this._initRequestAnimationFrameChecker();
        break;
      case VIEWABILITY_METHODS.BOUNDING_CLIENT_RECT:
        this._initBoundingClientRectChecker();
        break;
      default:
        break;
    }
  };

  ViewabilityDetector.prototype._initIntersectionObserver = function() {
    this.getViewabilityState = this._getIntersectionObserverState;

    var options = {
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.45, 0.5, 0.55, 0.6, 0.7, 0.8, 0.9, 1]
    };

    this._intersectionRatio = 0;
    var IntersectionObserver = window.IntersectionObserver;
    this._observer = new IntersectionObserver(this._observerHandler.bind(this), options);
    this._observer.observe(this._container);
  };

  ViewabilityDetector.prototype._observerHandler = function(entries) {
    this._intersectionRatio = Math.round(entries[0].intersectionRatio * 100);
  };

  ViewabilityDetector.prototype._getIntersectionObserverState = function() {
    return (this._hasFocus() && this._intersectionRatio >= VIEWABILITY_PARAMS.percent)
        ? VIEWABILITY_PARAMS.states.viewable
        : VIEWABILITY_PARAMS.states.notViewable;
  };

  ViewabilityDetector.prototype._initMozChecker = function() {
    this.getViewabilityState = this._getMozCheckerState;
  };

  ViewabilityDetector.prototype._getMozCheckerState = function() {
    var estimateOfHeightOfToolbars = 55;

    var outerPageBeginsY = window.screenY + estimateOfHeightOfToolbars;
    var outerPageEndsY = window.screenY + window.outerHeight;
    var byHeight = outerPageBeginsY < (window.mozInnerScreenY + window.innerHeight / 2) &&
        outerPageEndsY > (window.mozInnerScreenY + window.innerHeight / 2);

    var outerPageBeginsX = window.screenX;
    var outerPageEndsX = outerPageBeginsX + window.outerWidth;
    var byWidth = outerPageBeginsX < (window.mozInnerScreenX + window.innerWidth / 2) &&
        outerPageEndsX > (window.mozInnerScreenX + window.innerWidth / 2);

    return byWidth && byHeight
        ? VIEWABILITY_PARAMS.states.viewable
        : VIEWABILITY_PARAMS.states.notViewable;
  };

  ViewabilityDetector.prototype._initIEChecker = function() {
    this.getViewabilityState = this._getIECheckerState;
    this._ieGrid = this._getIEGrid();
  };

  ViewabilityDetector.prototype._getIECheckerState = function() {
    var grid = this._ieGrid;

    if (!this._isVisibleIEGridPoint(grid.center)) {
      return VIEWABILITY_PARAMS.states.notViewable;
    }

    var visiblePointsCount = 0;
    grid.points.forEach(function(point) {
      if (this._isVisibleIEGridPoint(point)) {
        visiblePointsCount++;
      }
    }, this);

    return visiblePointsCount >= (grid.points.length / 2)
        ? VIEWABILITY_PARAMS.states.viewable
        : VIEWABILITY_PARAMS.states.notViewable;
  };

  ViewabilityDetector.prototype._isVisibleIEGridPoint = function(point) {
    return !!document.elementFromPoint(point.x, point.y);
  };

  ViewabilityDetector.prototype._getIEGrid = function() {
    var points = [];
    var pointCount = VIEWABILITY_PARAMS.gridSize;

    var containerSize = {
      width: this._container.clientWidth - 1,
      height: this._container.clientHeight - 1
    };

    var lineCount = pointCount / 2;

    // looking for case when banner width or height is less then points count
    while (containerSize.clientWidth <= lineCount || containerSize.clientHeight <= lineCount) {
      pointCount = pointCount / 2;
      lineCount = pointCount / 2;
    }

    var step = {
      width: (containerSize.clientWidth - 1) / (lineCount - 1),
      height: (containerSize.clientHeight - 1) / (lineCount - 1)
    };

    for (var i = 0; i < lineCount; i++) {
      points.push({
        x: Math.floor(step.width * i),
        y: Math.floor(step.height * i)
      }, {
        x: Math.floor(step.width * i),
        y: Math.floor(step.height * (lineCount - 1 - i))
      });
    }

    return {
      center: {
        x: this._container.clientWidth / 2 - 1,
        y: this._container.clientHeight / 2 - 1
      },
      points: points
    }
  };

  ViewabilityDetector.prototype._initRequestAnimationFrameChecker = function() {
    this.getViewabilityState = this._getRequestAnimationFrameCheckerState;
    this._requestAnimationFramePointsSize = utils.isSafari() ? 8 : 1;

    this._requestAnimationFramePoints = {
      top: {
        left: '50%',
        top: '20%',
        isVisible: false,
        frame: null
      },
      bottom: {
        left: '50%',
        top: '80%',
        isVisible: false,
        frame: null
      },
      left: {
        left: '20%',
        top: '50%',
        isVisible: false,
        frame: null
      },
      right: {
        left: '80%',
        top: '50%',
        isVisible: false,
        frame: null
      }
    };

    this._requestAnimationFramePointsWrapper = document.createElement('div');
    this._requestAnimationFramePointsWrapper.style.cssText =
        'left: 0px; top: 0px; width: 0px; height: 0px; position: absolute; z-index: -9999;';
    this._container.appendChild(this._requestAnimationFramePointsWrapper);

    window['rtgtInitViewabilityPixel'] = function(name) {
      var pixel = new ViewabilityPixel(
          name,
          this._setRequestAnimationFramePointVisibility.bind(this),
          this._requestAnimationFramePoints[name].frame.contentWindow
      );
      pixel.checkVisibility();
    }.bind(this);

    for (var pointName in this._requestAnimationFramePoints) {
      if (this._requestAnimationFramePoints.hasOwnProperty(pointName)) {
        var frame = document.createElement('iframe');
        frame.width = this._requestAnimationFramePointsSize;
        frame.height = this._requestAnimationFramePointsSize;
        frame.frameBorder = 0;
        frame.id = pointName;
        frame.style.cssText = 'position: absolute; left: 0; top: 0; border-style: none;' +
            'display: block; pointer-events: none; opacity: 0;';

        this._requestAnimationFramePointsWrapper.appendChild(frame);
        this._requestAnimationFramePoints[pointName].frame = frame;
        this._setRequestAnimationFramePointPosition(pointName);

        frame.contentWindow.rtgtsrc = '<html><head><body><script>' +
            'window.parent["rtgtInitViewabilityPixel"](\"' + pointName + '\");' +
            '<\/script><\/body><\/head><\/html>';

        frame.src = 'javascript:window.rtgtsrc';
      }
    }
  };

  ViewabilityDetector.prototype._getRequestAnimationFrameCheckerState = function() {
    var visiblePointsCount = 0;

    for (var pointName in this._requestAnimationFramePoints) {
      if (this._requestAnimationFramePoints.hasOwnProperty(pointName) &&
          this._requestAnimationFramePoints[pointName].isVisible) {
        visiblePointsCount++;
      }
    }

    return visiblePointsCount >= 2
        ? VIEWABILITY_PARAMS.states.viewable
        : VIEWABILITY_PARAMS.states.notViewable;
  };

  ViewabilityDetector.prototype._setRequestAnimationFramePointsPosition = function() {
    for (var pointName in this._requestAnimationFramePoints) {
      if (this._requestAnimationFramePoints.hasOwnProperty(pointName)) {
        this._setRequestAnimationFramePointPosition(pointName);
      }
    }
  };

  ViewabilityDetector.prototype._setRequestAnimationFramePointPosition = function(pointName) {
    var point = this._requestAnimationFramePoints[pointName];
    var position = this._getPointPositionByPercent(point.left, point.top);
    point.frame.style.left = (position.x - this._requestAnimationFramePointsSize / 2) + 'px';
    point.frame.style.top = (position.y - this._requestAnimationFramePointsSize / 2) + 'px';
  };

  ViewabilityDetector.prototype._setRequestAnimationFramePointVisibility = function(name, isVisible) {
    this._requestAnimationFramePoints[name].isVisible = isVisible;
  };

  ViewabilityDetector.prototype._initBoundingClientRectChecker = function() {
    this.getViewabilityState = this._getBoundingClientRectCheckerState;
  };

  ViewabilityDetector.prototype._getBoundingClientRectCheckerState = function() {
    var currentWindow = this._containerWindow,
        rectangle = this._container.getBoundingClientRect(),
        visibilityRatio = this._getVisibilityRatio(rectangle, currentWindow);

    try {
      while (currentWindow !== window.top) {
        var name = currentWindow.name ||
            (currentWindow.name = utils.getRandomId('rtgt-'));
        currentWindow = currentWindow.parent;
        rectangle = currentWindow.frames[name].frameElement.getBoundingClientRect();
        visibilityRatio = Math.min(this._getVisibilityRatio(rectangle, currentWindow), visibilityRatio);
      }
    } catch (error) {
      return VIEWABILITY_PARAMS.states.undetermined;
    }

    return (this._hasFocus() && visibilityRatio * 100 >= VIEWABILITY_PARAMS.percent)
        ? VIEWABILITY_PARAMS.states.viewable
        : VIEWABILITY_PARAMS.states.notViewable;
  };

  // called when video ad is started and set interval for detecting viewability
  ViewabilityDetector.prototype.start = function() {
    if (!this._viewabilityDetected && !this._viewabilityInterval) {
      this._viewabilityInterval = setInterval(this._checkViewability.bind(this), VIEWABILITY_PARAMS.delay);
    }
  };

  // called when video ad is paused or stopped
  ViewabilityDetector.prototype.stop = function() {
    clearInterval(this._viewabilityInterval);
    this._viewabilityInterval = null;
  };

  // detect that document is visible and top document is focused
  ViewabilityDetector.prototype._hasFocus = function() {
    return !document.hidden &&
        (this._position === AD_POSITION.xFrame ||
            window.top.document.hasFocus && window.top.document.hasFocus());
  };

  // detect ad position on the page: onPage,sameDomainFrame or crossDomainFrame
  ViewabilityDetector.prototype._getPosition = function() {
    if (window.top === this._containerWindow) {
      return AD_POSITION.onPage;
    }
    try {
      var currentWindow = this._containerWindow;
      while (currentWindow.parent !== currentWindow) {
        if (currentWindow.parent.document.domain !== currentWindow.document.domain) {
          return AD_POSITION.xFrame;
        }
        currentWindow = currentWindow.parent;
      }
    } catch (error) {
      return AD_POSITION.xFrame;
    }
    return AD_POSITION.sFrame;
  };

  // viewability interval callback
  ViewabilityDetector.prototype._checkViewability = function() {
    var viewabilityState = this.getViewabilityState();

    switch (viewabilityState) {
      case VIEWABILITY_PARAMS.states.undetermined:
        this._destroyViewabilityWatchers();
        break;
      case VIEWABILITY_PARAMS.states.notViewable:
        this._timeInView = 0;
        break;
      case VIEWABILITY_PARAMS.states.viewable:
        this._timeInView += VIEWABILITY_PARAMS.delay;
        if (this._timeInView >= VIEWABILITY_PARAMS.duration) {
          this._destroyViewabilityWatchers();
          // insert viewability pixel
          utils.sendPixel(this._viewabilityPixelUrl);
        }
        break;
    }
  };

  // calculate visible ad area
  ViewabilityDetector.prototype._getVisibilityRatio = function(rectangle, currentWindow) {
    var width = rectangle.width,
        height = rectangle.height,
        square = width * height;
    if (rectangle.top < 0) {
      height += rectangle.top;
    }
    if (rectangle.bottom > currentWindow.innerHeight) {
      height -= rectangle.bottom - currentWindow.innerHeight;
    }
    if (rectangle.left < 0) {
      width += rectangle.left;
    }
    if (rectangle.right > currentWindow.innerWidth) {
      width -= rectangle.right - currentWindow.innerWidth;
    }
    return width * height / square;
  };

  ViewabilityDetector.prototype._destroyViewabilityWatchers = function() {
    clearInterval(this._viewabilityInterval);
    this._viewabilityDetected = true;
  };

  ViewabilityDetector.prototype.onResize = function() {
    if (this._viewabilityDetected) {
      return;
    }

    switch (this._checkingMethod) {
      case VIEWABILITY_METHODS.ELEMENT_FROM_POINT:
        this._ieGrid = this._getIEGrid();
        break;
      case VIEWABILITY_METHODS.REQUEST_ANIMATION_FRAME:
        this._setRequestAnimationFramePointsPosition();
        break;
      default:
        break;
    }
  };

  // for request animation frame viewability checking method
  function ViewabilityPixel(name, onSetVisibility, win) {
    this.name = name;
    this.timeout = null;
    this.onSetVisibility = onSetVisibility;
    this.win = win || window;
  }

  ViewabilityPixel.prototype.checkVisibility = function() {
    var check = function() {
      if (this.timeout) {
        this.win.clearTimeout(this.timeout);
      }

      this.timeout = this.win.setTimeout(this.setVisibility.bind(this, false), 100);
      this.setVisibility(true);
      this.win.requestAnimationFrame(check);
    }.bind(this);

    this.win.requestAnimationFrame(check);
  };

  ViewabilityPixel.prototype.setVisibility = function(isVisible) {
    this.onSetVisibility(this.name, isVisible);
  };

  ViewabilityDetector.prototype._getPointPositionByPercent = function(left, top) {
    return {
      x: window.innerWidth * (parseFloat(left) / 100),
      y: window.innerHeight * (parseFloat(top) / 100)
    };
  };

  // all video ad attributes can be get and set
  function Attributes(callEvent) {
    return Object.create(Object.prototype, {
      linear: {
        get: function() {
          return this._linear === undefined ? true : this._linear;
        },
        set: function(value) {
          if (this._linear !== value) {
            this._linear = value;
            callEvent(AD_EVENTS.linearChange);
          }
        }
      },
      size: {
        get: function() {
          return this._size || {};
        },
        set: function(value) {
          if (this._size) {
            if (this._size.width !== value.width || this._size.height !== value.height) {
              this._size = value;
              callEvent(AD_EVENTS.sizeChange);
            }
          } else {
            this._size = value;
          }
        }
      },
      expanded: {
        get: function() {
          return this._expanded || false;
        },
        set: function(value) {
          if (this._expanded !== value) {
            this._expanded = value;
            callEvent(AD_EVENTS.expandedChange);
          }
        }
      },
      skippableState: {
        get: function() {
          return this._skippableState || false;
        },
        set: function(value) {
          if (this._skippableState !== value) {
            this._skippableState = value;

            callEvent(AD_EVENTS.skippableStateChange);
          }
        }
      },
      remainingTime: {
        get: function() {
          return this._remainingTime === undefined ? -2 : this._remainingTime;
        },
        set: function(value) {
          if (this._remainingTime !== value) {
            this._remainingTime = value;
          }
        }
      },
      duration: {
        get: function() {
          return this._duration === undefined ? -2 : this._duration;
        },
        set: function(value) {
          if (this._duration !== value) {
            this._duration = value;
            callEvent(AD_EVENTS.durationChange);
          }
        }
      },
      volume: {
        get: function() {
          return this._volume === undefined ? 0.5 : this._volume;
        },
        set: function(value) {
          if (value > 1) {
            value = value / 100;
          }
          if (value < 0) {
            value = 0;
          }
          if (this._volume !== value) {
            this._volume = value;
            callEvent(AD_EVENTS.volumeChange);
          }
        }
      },
      companions: {
        get: function() {
          return '';
        }
      },
      icons: {
        get: function() {
          return false;
        }
      },
      desiredBitrate: {
        get: function() {
          return this._desiredBitrate === undefined ? 256 : this._desiredBitrate;
        },
        set: function(value) {
          this._desiredBitrate = value;
        }
      },
      viewMode: {
        get: function() {
          return this._viewMode || 'normal';
        },
        set: function(value) {
          this._viewMode = value;
        }
      }
    });
  }

  // load third party VAST
  var VastLoader = function() {};

  VastLoader.prototype.load = function(url) {
    this._makeRequest(url, function(xml) {
      if (xml) {
        this._parse(xml);
      }
      else {
        adContainer.events.callEvent(AD_EVENTS.error, ['No VAST tag response']);
      }
    }.bind(this))
  };

  VastLoader.prototype._makeRequest = function(url, callback) {
    if (window.location.protocol === 'https:' && url.indexOf('http://') === 0) {
      return callback();
    }

    try {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);

      if (xhr.overrideMimeType) {
        xhr.overrideMimeType('text/xml');
      }

      xhr.onload = function() {
        return callback(this.responseXML);
      };

      xhr.onerror = function() {
        return callback();
      };

      xhr.send();
    }
    catch (e) {
      return callback();
    }
  };

  VastLoader.prototype._parse = function(xml) {
    this.vastParser = new VastParser();
    var parsedVast = this.vastParser.parse(xml);
    if (parsedVast) {
      this._applyVast(parsedVast);
    }
    else {
      adContainer.events.callEvent(AD_EVENTS.error, ['No VAST tag response']);
    }
  };

  // create instance of vpaidPlayer class if we have valid parsed third party VPAID creative
  VastLoader.prototype._applyVast = function(vast) {
    if (vast && vast.ads && vast.ads.length) {
      var ad = vast.ads[0];

      for (var i = 0; i < ad.creatives.length; i++) {
        var creative = ad.creatives[i];

        // looking for a valid third party vpaid file
        var mediaFiles = creative.mediaFiles.filter(function(mediaFile) {
          return mediaFile.apiFramework && mediaFile.apiFramework.toLowerCase() === 'vpaid' &&
              mediaFile.type.toLowerCase() === 'application/javascript' &&
              mediaFile.delivery.toLowerCase() === 'progressive';
        });


        if (mediaFiles.length) {
          // handle events and call pixels from third party vast
          var eventsTracker = new EventsTracker(creative.trackingEvents, ad.impressionUrls, ad.errorUrls,
              creative.videoClicks && creative.videoClicks.clickTrackingUrls);
          eventsTracker.init();

          var vpaidPlayer = new VpaidPlayer();
          vpaidPlayer.init(mediaFiles[0], creative.adParameters);

          return;
        }
      }

      adContainer.events.callEvent(AD_EVENTS.error, ['No correct media file found']);
    }
  };

  // parse third party VAST to collect pixels and VPAID file
  var VastParser = function() {
    this.parsedVast = {
      ads: [],
      errorUrls: []
    };
  };

  VastParser.prototype.parse = function(xml) {
    if (!xml || !xml.documentElement || xml.documentElement.nodeName !== 'VAST') {
      return;
    }

    xml.documentElement.childNodes.forEach(function(node) {
      if (node.nodeName === 'Error') {
        this.parsedVast.errorUrls.push(this._parseTextNode(node));
      }
      else if (node.nodeName === 'Ad') {
        var ad = this._parseAdNode(node);

        if (ad) {
          this.parsedVast.ads.push(ad);
        }
      }
    }, this);

    return this.parsedVast;
  };

  VastParser.prototype._parseTextNode = function(node) {
    return node && (node.textContent || node.text || '').trim() || null;
  };

  VastParser.prototype._parseAdNode = function(node) {
    var childNodes = node.childNodes;

    for (var i = 0; i < childNodes.length; i++) {
      var node = childNodes[i];

      if (node.nodeName === 'InLine') {
        return this._parseInlineAdNode(node);
      }
    }
  };

  VastParser.prototype._parseInlineAdNode = function(adNode) {
    var ad = {
      id: null,
      errorUrls: [],
      impressionUrls: [],
      creatives: []
    };

    adNode.childNodes.forEach(function(node) {
      switch (node.nodeName) {
        case 'Error':
          ad.errorUrls.push(this._parseTextNode(node));
          break;

        case 'Impression':
          ad.impressionUrls.push(this._parseTextNode(node));
          break;

        case 'Creatives':
          var creativeNodes = this._getChildNodesByName(node, 'Creative');

          creativeNodes.forEach(function(creativeNode) {
            creativeNode.childNodes.forEach(function(childNode) {
              if (childNode.nodeName === 'Linear') {
                var creative = this._parseCreativeLinearNode(childNode);
                if (creative) {
                  ad.creatives.push(creative);
                }
              }
            }, this);
          }, this);
          break;
      }
    }, this);

    return ad;
  };

  VastParser.prototype._getChildNodeByName = function(node, childName) {
    for (var i = 0; i < node.childNodes.length; i++) {
      if (node.childNodes[i].nodeName === childName) {
        return node.childNodes[i];
      }
    }
  };

  VastParser.prototype._getChildNodesByName = function(node, childName) {
    var children = [];

    node.childNodes.forEach(function(child) {
      if (child.nodeName === childName) {
        children.push(child);
      }
    });

    return children;
  };

  VastParser.prototype._parseCreativeLinearNode = function(creativeNode) {
    var creative = {
      type: 'linear',
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
    };

    var durationNode = this._getChildNodeByName(creativeNode, 'Duration');
    creative.duration = this._parseDuration(this._parseTextNode(durationNode));
    if (creative.duration === -1) {
      return null;
    }

    var skipOffset = creativeNode.getAttribute('skipoffset');
    if (skipOffset) {
      creative.skipOffset = this._parseOffset(skipOffset, creative.duration);
    }

    var videoClicksNode = this._getChildNodeByName(creativeNode, 'VideoClicks');
    if (videoClicksNode) {
      creative.videoClicks.clickThroughUrl = this._parseTextNode(this._getChildNodeByName(videoClicksNode, 'ClickThrough'));

      var clickTrackingNodes = this._getChildNodesByName(videoClicksNode, 'ClickTracking');

      clickTrackingNodes.forEach(function(node) {
        creative.videoClicks.clickTrackingUrls.push(this._parseTextNode(node));
      }, this);

      var customClickNodes = this._getChildNodesByName(videoClicksNode, 'CustomClick');
      customClickNodes.forEach(function(node) {
        creative.videoClicks.customClickUrls.push(this._parseTextNode(node));
      }, this);
    }

    creative.adParameters = this._parseTextNode(this._getChildNodeByName(creativeNode, 'AdParameters'));

    var trackingEventsNode = this._getChildNodeByName(creativeNode, 'TrackingEvents');
    if (trackingEventsNode) {
      var trackingEventsChildNodes = this._getChildNodesByName(trackingEventsNode, 'Tracking');

      trackingEventsChildNodes.forEach(function(node) {
        var nodeUrl = this._parseTextNode(node);
        var nodeEvent = node.getAttribute('event');
        if (nodeEvent && nodeUrl) {
          if (nodeEvent === 'progress') {
            var offset = node.getAttribute('offset');
            if (offset) {
              nodeEvent += '-' + this._parseOffset(skipOffset, creative.duration);
            }
          }

          creative.trackingEvents[nodeEvent] = creative.trackingEvents[nodeEvent] || [];
          creative.trackingEvents[nodeEvent].push(nodeUrl);
        }
      }, this);
    }

    var mediaFilesNode = this._getChildNodeByName(creativeNode, 'MediaFiles');
    var mediaFilesChildNode = this._getChildNodesByName(mediaFilesNode, 'MediaFile');

    mediaFilesChildNode.forEach(function(node) {
      var mediafile = {
        id: node.getAttribute('id'),
        url: this._parseTextNode(node),
        delivery: node.getAttribute('delivery'),
        type: node.getAttribute('type'),
        codec: node.getAttribute('codec'),
        apiFramework: node.getAttribute('apiFramework'),
        width: node.getAttribute('width') || 0,
        height: node.getAttribute('height') || 0,
        bitrate: node.getAttribute('bitrate') || 0,
        minBitrate: node.getAttribute('minBitrate') || 0,
        maxBitrate: node.getAttribute('maxBitrate') || 0,
        scalable: !!(node.getAttribute('scalable') && node.getAttribute('scalable').toLowerCase() === 'true'),
        maintainAspectRatio: !!(node.getAttribute('maintainAspectRatio') && node.getAttribute('maintainAspectRatio').toLowerCase() === 'true')
      };

      creative.mediaFiles.push(mediafile);
    }, this);

    return creative;
  };

  VastParser.prototype._parseDuration = function(duration) {
    if (!duration) {
      return -1;
    }

    var durationArr = duration.split(':');

    if (durationArr.length !== 3) {
      return -1;
    }

    var hours = parseInt(durationArr[0], 10) * 60 * 60;
    var minutes = parseInt(durationArr[1], 10) * 60;
    var seconds = parseFloat(durationArr[2]);

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds)) {
      return -1;
    }
    else {
      return hours + minutes + seconds;
    }
  };

  VastParser.prototype._parseOffset = function(skipOffset, duration) {
    // skipOffset could be percents or hh:mm:ss
    return (skipOffset.indexOf('%') === skipOffset.length - 1)
        ? duration * (parseInt(skipOffset, 10) / 100)
        : this._parseDuration(skipOffset);
  };

  // load and init third party VPAID
  var VpaidPlayer = function() {
    this._iframe = null;
    this._adParameters = null;
  };

  VpaidPlayer.prototype.init = function(mediaFile, adParameters) {
    var id = utils.getRandomId();

    window['rtgtstartvpaid' + id] = this.startVPAID.bind(this);
    window['rtgtstartvpaiderror' + id] = this.handleError.bind(this);

    this._iframe = document.createElement('iframe');
    this._iframe.style.display = 'none';
    document.body.appendChild(this._iframe);

    this._iframe.contentWindow.rtgtsrc = '<html><head><body><script>' +
        'function startVPAID() {window.parent["rtgtstartvpaid' + id + '"]();};' +
        'function errorVPAID() {window.parent["rtgtstartvpaiderror' + id + '"]();};' +
        '<\/script><script onerror="errorVPAID();" onload="startVPAID();"' +
        'src="' + mediaFile.url + '"><\/script></body></head></html>';

    this._iframe.src = 'javascript:window.rtgtsrc';
    this._adParameters = adParameters;
  };

  VpaidPlayer.prototype.handleError = function() {
    adContainer.events.callEvent(AD_EVENTS.error, ['No VPAID response']);
  };

  VpaidPlayer.prototype.startVPAID = function() {
    var win = this._iframe.contentWindow;
    var vpaidAd = win.getVPAIDAd && 'function' == typeof win.getVPAIDAd && win.getVPAIDAd();

    if (vpaidAd) {
      vpaidAd.handshakeVersion(adContainer.version);

      var eventsCallbacks = this._getEventsCallbacks();
      for (var eventName in eventsCallbacks) {
        vpaidAd.subscribe(eventsCallbacks[eventName], eventName);
      }

      adContainer.actualVpaidAd = vpaidAd;
      var creativeData = this._adParameters
          ? {AdParameters: this._adParameters}
          : (adContainer.ad._creativeData || {});
      vpaidAd.initAd(adContainer.ad._width, adContainer.ad._height, adContainer.ad._viewMode,
          adContainer.ad._desiredBitrate, creativeData, adContainer.ad._environmentVars)
    }
  };

  VpaidPlayer.prototype._getEventsCallbacks = function() {
    var callbacks = {};

    for (var event in AD_EVENTS) {
      var callback = function() {
        var eventName = AD_EVENTS[event];
        return function() {
          adContainer.events.callEvent(eventName, arguments);
        }
      }();

      callbacks[AD_EVENTS[event]] = callback;
    }

    return callbacks;
  };

  // handle ad events and call pixels from third party VAST
  var EventsTracker = function(trackingEvents, impressionUrls, errorUrls, clickTrackingUrls) {
    this._trackingEvents = trackingEvents;
    this._impressionUrls = impressionUrls;
    this._errorUrls = errorUrls;
    this._clickTrackingUrls = clickTrackingUrls;
    this._lastVolume = false;
  };

  EventsTracker.prototype.init = function() {
    adContainer.events.subscribe(function(params) {
      var eventName = params.eventName;
      var urls = null;

      switch (eventName) {
        case AD_EVENTS.impression:
          urls = this._impressionUrls;
          break;
        case AD_EVENTS.volumeChange:
          var volume = adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdVolume();
          if (typeof this._lastVolume === 'number' && typeof volume === 'number') {
            if (volume === 0 && this._lastVolume > 0) {
              urls = this._trackingEvents.mute;
            }
            else if (volume > 0 && this._lastVolume === 0) {
              urls = this._trackingEvents.unmute;
            }
          }
          this._lastVolume = volume;
          break;
        case AD_EVENTS.clickThru:
          urls = this._clickTrackingUrls;
          break;
        case AD_EVENTS.error:
          urls = this._errorUrls;
          break;
        default:
          urls = this._trackingEvents[TRACKING_EVENTS[eventName]];
          break;
      }

      if (urls && urls.length) {
        urls.forEach(function(url) {
          utils.sendPixel(url);
        });
      }
    }.bind(this));
  };

  // universal subscriber to all vpaid ad events
  var VpaidEvents = function() {
    this._events = [];
  };

  VpaidEvents.prototype.subscribe = function(fn) {
    this._events.push(fn);
  };

  VpaidEvents.prototype.callEvent = function(eventName, args) {
    this._events.forEach(function(event) {
      event.call(null, {eventName: eventName, args: args});
    });
  };

  // vpaid ad common interface implementation
  var VpaidAd = function() {
    this._width = null;
    this._height = null;
    this._viewMode = null;
    this._desiredBitrate = null;
    this._creativeData = null;
    this._environmentVars = null;
    this._slot = null;
    this._videoSlot = null;
    this._container = null;
    this._adParameters = {};
    this._playerCallbacks = {};
  };

  VpaidAd.prototype.initAd = function(width, height, viewMode, desiredBitrate,
                                      creativeData, environmentVars) {
    this._width = width;
    this._height = height;
    this._viewMode = viewMode || 'normal';
    this._desiredBitrate = desiredBitrate;
    this._creativeData = creativeData;
    this._environmentVars = environmentVars;
    this._slot = environmentVars.slot;
    this._videoSlot = environmentVars.videoSlot;

    if (typeof creativeData !== 'object' || typeof environmentVars !== 'object') {
      adContainer.events.callEvent(AD_EVENTS.error);
    }

    try {
      this._adParameters = JSON.parse(creativeData.AdParameters);
    } catch (error) {
      adContainer.events.callEvent(AD_EVENTS.error);
    }

    this._handleVpaidEvents();
    this._setAdContainer();

    if (this._adParameters.externalVastUrl) {
      this._vastLoader = new VastLoader();
      this._vastLoader.load(this._adParameters.externalVastUrl);
    }
    else {
      adContainer.actualVpaidAd = new VideoPlayer();
      adContainer.actualVpaidAd.init(this._width, this._height, this._viewMode, this._desiredBitrate,
          this._adParameters, this._slot, this._videoSlot, this._container);
    }
  };

  VpaidAd.prototype._setAdContainer = function() {
    if (!this._slot || this._slot.nodeType !== 1) {
      this._slot = document.body;
    }

    this._container = document.createElement('div');
    this._container.id = utils.getRandomId('rtgt-');
    this._container.setAttribute('style', 'position: absolute; width: 100%; height: 100%;');

    if (!this._adParameters.externalVastUrl) {
      this._container.style.zIndex = 100;
    }

    this._slot.appendChild(this._container);
  };

  VpaidAd.prototype.handshakeVersion = function() {
    return adContainer.version;
  };

  VpaidAd.prototype.resizeAd = function(width, height, viewMode) {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.resizeAd(width, height, viewMode);
    this._container.style.width = width + 'px';
    this._container.style.height = height + 'px';
  };

  VpaidAd.prototype.startAd = function() {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.startAd();
  };

  VpaidAd.prototype.stopAd = function() {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.stopAd();
  };

  VpaidAd.prototype.pauseAd = function() {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.pauseAd();
  };

  VpaidAd.prototype.resumeAd = function() {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.resumeAd();
  };

  VpaidAd.prototype.expandAd = function() {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.expandAd();
  };

  VpaidAd.prototype.collapseAd = function() {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.collapseAd();
  };

  VpaidAd.prototype.skipAd = function() {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.skipAd();
  };

  VpaidAd.prototype.setAdVolume = function(volume) {
    adContainer.actualVpaidAd && adContainer.actualVpaidAd.setAdVolume(volume);
  };

  VpaidAd.prototype.getAdVolume = function() {
    return adContainer.actualVpaidAd ? adContainer.actualVpaidAd.getAdVolume() : 1;
  };

  VpaidAd.prototype.getAdDuration = function() {
    return adContainer.actualVpaidAd ? adContainer.actualVpaidAd.getAdDuration() : -2;
  };

  VpaidAd.prototype.getAdLinear = function() {
    return adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdLinear();
  };

  VpaidAd.prototype.getAdWidth = function() {
    return adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdWidth();
  };

  VpaidAd.prototype.getAdHeight = function() {
    return adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdHeight();
  };

  VpaidAd.prototype.getAdRemainingTime = function() {
    return adContainer.actualVpaidAd ? adContainer.actualVpaidAd.getAdRemainingTime() : -2;
  };

  VpaidAd.prototype.getAdExpanded = function() {
    return adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdExpanded();
  };

  VpaidAd.prototype.getAdSkippableState = function() {
    return adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdSkippableState();
  };

  VpaidAd.prototype.getAdIcons = function() {
    return adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdIcons();
  };

  VpaidAd.prototype.getAdCompanions = function() {
    return adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdCompanions
        ? adContainer.actualVpaidAd.getAdCompanions()
        : '';
  };

  VpaidAd.prototype.subscribe = function(fn, eventName, context) {
    var callbacks = this._playerCallbacks[eventName] || [];
    callbacks.push({
      fn: fn,
      context: context || null
    });

    this._playerCallbacks[eventName] = callbacks;
  };

  VpaidAd.prototype.unsubscribe = function(fn, eventName) {
    var callbacks = this._playerCallbacks[eventName] || [];
    for (var i = 0, len = callbacks.length || 0; i < len; i++) {
      if (callbacks[i].fn === fn) {
        callbacks.splice(i, 1);
        return;
      }
    }

    this._playerCallbacks[eventName] = callbacks;
  };

  // detect page location
  VpaidAd.prototype._sendLocation = function() {
    var locationUrl = '';
    try {
      locationUrl = window.top.location.href;
    } catch (err) {
      var ancestorOrigins = window.location.ancestorOrigins;
      if (ancestorOrigins && ancestorOrigins.length) {
        locationUrl = ancestorOrigins[ancestorOrigins.length - 1];
      }
      else {
        var topmostWindow = utils.getTopmostWindow();
        locationUrl = topmostWindow.document.referrer;
      }
    }

    var element = typeof this._videoSlot.nodeName === 'string' && typeof this._videoSlot.nodeType === 'number'
        ? this._videoSlot
        : this._slot;

    if (element.clientWidth === 0 || element.clientHeight === 0) {
      element = this._container;
    }

    var size = element.clientWidth + 'x' + element.clientHeight;

    var segmentValue = [
      this._adParameters.urlParameters.ssp,
      this._adParameters.urlParameters.rid,
      encodeURIComponent(locationUrl),
      size
    ].join(';');
    var segmentUrl = REPORT_URL + '?event=addToSegment&name=__imp_url&value=' + segmentValue;
    utils.sendPixel(segmentUrl);
  };

  VpaidAd.prototype._trackProgress = function() {
    var progressTime = this._adParameters.progress;
    var progressLinks = this._adParameters.progressLinks;

    if (!progressTime || !progressLinks || !progressLinks.length) {
      return;
    }

    var duration = this.getAdDuration();

    this._progressInterval = setInterval(function() {
      if (duration - this.getAdRemainingTime() >= progressTime - 0.25) {
        clearInterval(this._progressInterval);
        var isViewable = this._viewabilityDetector.getViewabilityState() === VIEWABILITY_PARAMS.states.viewable;

        progressLinks.forEach(function(url) {
          url += isViewable && url.includes(RUTARGET_DOMAIN) ? '&viewable=true' : '';
          utils.sendPixel(url);
        });
      }
    }.bind(this), 200);
  };

  VpaidAd.prototype._handleVpaidEvents = function() {
    adContainer.events.subscribe(function(params) {
      var eventName = params.eventName;
      var args = params.args;
      var urls = [];
      var urlPostfix = '';

      switch (eventName) {
        case AD_EVENTS.loaded:
          this._viewabilityDetector = new ViewabilityDetector(this._container, this._adParameters.adEventsTrackers.view);
          this._viewabilityDetector.init();
          break;
        case AD_EVENTS.videoStart:
          this._viewabilityDetector.start();
          this._sendLocation();
          this._trackProgress();
          break;
        case AD_EVENTS.playing:
          this._viewabilityDetector.start();
          break;
        case AD_EVENTS.stopped:
        case AD_EVENTS.paused:
          this._viewabilityDetector.stop();
          break;
        case AD_EVENTS.skipped:
          this._viewabilityDetector.stop();
          urls = this._adParameters.adEventsTrackers.playback.skip;
          break;
        case AD_EVENTS.clickThru:
          if (this._adParameters.externalVastUrl) {
            urls = [this._adParameters.adEventsTrackers.clickThrough + '&response=pixel'];
          }
          urls = urls.concat(this._adParameters.adEventsTrackers.clickTracking);
          break;
        case AD_EVENTS.sizeChange:
          this._viewabilityDetector.onResize();
          break;
      }

      if (TRACKING_EVENTS[eventName] !== undefined) {
        urls = this._adParameters.adEventsTrackers.playback[TRACKING_EVENTS[eventName]];
      } else if (eventName === AD_EVENTS.volumeChange) {
        var volume = adContainer.actualVpaidAd && adContainer.actualVpaidAd.getAdVolume();
        if (typeof this._lastVolume === 'number' && typeof volume === 'number') {
          if (volume === 0 && this._lastVolume > 0) {
            urls = this._adParameters.adEventsTrackers.playback.mute;
          }
          else if (volume > 0 && this._lastVolume === 0) {
            urls = this._adParameters.adEventsTrackers.playback.unmute;
          }
        }
        this._lastVolume = volume;
      }

      if (VIEWABILITY_EVENTS[eventName] !== undefined &&
          this._viewabilityDetector.getViewabilityState() === VIEWABILITY_PARAMS.states.viewable) {
        urlPostfix = '&viewable=true';
      }

      if (urls && urls.length) {
        urls.forEach(function(url) {
          if (url.includes(RUTARGET_DOMAIN)) {
            url += urlPostfix
          }

          utils.sendPixel(url);
        });
      }

      // call player subscribers in timeout for sure that our pixels loaded
      setTimeout(function() {
        var callbacks = this._playerCallbacks[eventName];
        if (callbacks && callbacks.length) {
          callbacks.forEach(function(callback) {
            callback.fn.apply(callback.context, args);
          });
        }
      }.bind(this), 100);

    }.bind(this));
  };

  // vpaid ad implementation for NOT third party vpaid ad
  var VideoPlayer = function() {
    this._attributes = new Attributes(adContainer.events.callEvent.bind(adContainer.events));

    // div element on the main page that the ad is supposed to occupy
    this._slot = null;
    this._container = null;

    this._video = {
      slot: null, // video object that the creative can use to render the video element
      states: {
        loaded: false,
        inited: false,
        started: false,
        paused: false,
        stoped: false,
        progressed: false
      },
      lastEventIndex: 0,
      progressEvents: [{
        event: AD_EVENTS.videoFirstQuartile,
        value: 0.25
      },
        {
          event: AD_EVENTS.videoMidpoint,
          value: 0.50
        },
        {
          event: AD_EVENTS.videoThirdQuartile,
          value: 0.75
        }
      ]
    };

  };

  VideoPlayer.prototype.init = function(width, height, viewMode, desiredBitrate,
                                        adParameters, slot, videoSlot, container) {
    this._attributes.size = {
      width: width,
      height: height
    };

    this._attributes.viewMode = viewMode;
    this._attributes.desiredBitrate = desiredBitrate;
    this._adParameters = adParameters;

    //slot and videoSlot are passed as part of the environmentVars
    this._slot = slot;
    this._video.slot = videoSlot;
    this._container = container;

    this._updateSlots();

    // Unable to find a source video.
    if (!this._setMediaFiles()) {
      adContainer.events.callEvent(AD_EVENTS.error);
    }

    this._renderSkippableButton();
    this._addVideoEventListeners();
    var clickThrough = this._adParameters.adEventsTrackers.clickThrough;
    var matchErid = clickThrough.match(/[?&]erid=([^&]+)/);

    if(matchErid && matchErid[1]) {
      informer(matchErid[1], this._container);
    }

    carousel(this._container);

    adContainer.events.callEvent(AD_EVENTS.loaded);
  };

  VideoPlayer.prototype._updateSlots = function() {
    if (!this._video.slot) {
      this._video.slot = document.createElement('video');
      this._container.appendChild(this._video.slot);
    }

    // On small iOS devices, videos play in fullscreen by default
    // this attribute will be allowed to play inline video,
    // and will not automatically enter fullscreen mode when playback begins
    try {
      this._video.slot.setAttribute('webkit-playsinline', 'playsinline');
    } catch (error) {}
  };

  VideoPlayer.prototype._updateSize = function() {
    // _video.slot could be a reference instead of element
    try {
      this._video.slot.style.width = this._attributes.size.width + 'px';
      this._video.slot.style.height = this._attributes.size.height + 'px';
    } catch (err) {}
  };

  VideoPlayer.prototype._setMediaFiles = function() {
    var videos = this._adParameters.videos || [];

    for (var i = 0; i < videos.length; i++) {
      // Choose the first video with a supported mimetype.
      if (this._video.slot.canPlayType(videos[i].type)) {
        this._video.slot.setAttribute('src', videos[i].url);
        this._video.slot.setAttribute('type', 'video/mp4');
        this._video.slot.setAttribute('controls', 'controls');
        return true;
      }
    }

    return false;
  };

  VideoPlayer.prototype._showSkip = function() {
    return this._adParameters.showSkip;
  };

  VideoPlayer.prototype._renderSkippableButton = function() {
    if (!this._showSkip()) {
      return;
    }

    this._skippableButton = document.createElement('div');
    this._skippableButton.id = utils.getRandomId('rtgt-');
    this._skippableButton.setAttribute('style',
        'position: absolute; right: 0; bottom: 22px; padding: 10px 15px;' +
        'font-family: Arial; font-size: 11px; line-height: 11px; color: #e6e6e6;' +
        'background: rgba(0,0,0,0.8); cursor: default; z-index: 1000; display: none;');
    this._skippableButtonText = document.createElement('span');

    this._container.appendChild(this._skippableButton);
    this._skippableButton.appendChild(this._skippableButtonText);
  };

  VideoPlayer.prototype._renderPlayButton = function() {
    this._playButtonWrapper = document.createElement('div');
    this._playButtonWrapper.setAttribute('style',
        'width: 100%; height: 100%; position: absolute; ' +
        'left: 0; bottom: 0; z-index: 1000; background: rgba(0,0,0,0.7);');
    this._playButton = document.createElement('div');
    this._playButton.setAttribute('style',
        'width: 64px; height: 64px; position: absolute; margin: 0 0 -32px -32px;' +
        'left: 50%; bottom: 50%; cursor: pointer; z-index: 1000;');
    this._playButton.style.background = 'url(' + RESOURCE_URL + 'play.svg)';

    this._container.appendChild(this._playButtonWrapper);
    this._playButtonWrapper.appendChild(this._playButton);
    this._playButton.addEventListener('click', this.startAd.bind(this));
  };

  VideoPlayer.prototype._renderMuteButton = function() {
    this._muteButton = document.createElement('div');
    this._muteButton.setAttribute('style',
        'width: 32px; height: 32px; position: absolute; ' +
        'left: 15px; bottom: 15px; cursor: pointer; z-index: 1000;');
    this._muteButton.style.background = 'url(' + RESOURCE_URL + 'mute.svg)';

    this._container.appendChild(this._muteButton);
    this._muteButton.addEventListener('click', function (e) {
      e.stopPropagation();
      this._switchMute();
    }.bind(this));
  };

  VideoPlayer.prototype._switchMute = function() {
    if (this._attributes.volume === 0) {
      this.setAdVolume(1);
      this._muteButton.style.background = 'url(' + RESOURCE_URL + 'volume.svg)';
    }
    else {
      this.setAdVolume(0);
      this._muteButton.style.background = 'url(' + RESOURCE_URL + 'mute.svg)';
    }
  };

  VideoPlayer.prototype._addVideoEventListeners = function() {
    this._container.addEventListener('click', this._overlayOnClick.bind(this), false);

    this._video.slot.addEventListener('timeupdate', function(e) {
      if (!this._video.states.inited && e.target.duration) {
        this._video.states.inited = true;
        this._attributes.duration = e.target.duration;
        adContainer.events.callEvent(AD_EVENTS.started);
        adContainer.events.callEvent(AD_EVENTS.impression);
        adContainer.events.callEvent(AD_EVENTS.videoStart);
      }
      this._timeUpdateHandler(e);
    }.bind(this));

    this._video.slot.addEventListener('play', function(e) {
      if (this._video.states.inited) {
        adContainer.events.callEvent(AD_EVENTS.playing);
      }
    }.bind(this));

    this._video.slot.addEventListener('pause', function(e) {
      if (e.target.currentTime / e.target.duration >= 0.98) {
        return;
      }

      adContainer.events.callEvent(AD_EVENTS.paused);
    }.bind(this));

    this._video.slot.addEventListener('ended', function(e) {
      adContainer.events.callEvent(AD_EVENTS.videoComplete);
      this.stopAd();
    }.bind(this));

    this._video.slot.addEventListener('error', function(e) {
      adContainer.events.callEvent(AD_EVENTS.error);
      this.stopAd();
    }.bind(this));
  };

  VideoPlayer.prototype._overlayOnClick = function() {
    // [null, null, true] - [url, id, playerHadlers]
    adContainer.events.callEvent(AD_EVENTS.clickThru, [this._adParameters.adEventsTrackers.clickThrough || null, null, true]);
  };

  // checks video progressEvents
  VideoPlayer.prototype._timeUpdateHandler = function(e) {
    this._attributes.remainingTime = e.target.duration - e.target.currentTime;
    this._updateSkippableButton(e.target.currentTime);

    if (this._video.lastEventIndex >= this._video.progressEvents.length) {
      return;
    }

    var progress = e.target.currentTime / e.target.duration,
        currentVideoEvent = this._video.progressEvents[this._video.lastEventIndex];
    if (progress >= currentVideoEvent.value) {
      adContainer.events.callEvent(currentVideoEvent.event);
      this._video.lastEventIndex++;
    }
  };

  VideoPlayer.prototype._updateSkippableButton = function(currentTime) {
    if (!this._showSkip()) {
      return;
    }
    if (currentTime >= 5) {
      if (!this._attributes.skippableState) {
        this._attributes.skippableState = true;
        this._skippableButtonText.innerHTML = SKIPPABLE_TEXT.skip;
        this._skippableButton.style.cursor = 'pointer';
        this._skippableButton.addEventListener('click', function(e) {
          e.stopPropagation();
          this.skipAd();
        }.bind(this));
      }
    } else {
      this._skippableButtonText.innerHTML = [
        SKIPPABLE_TEXT.waiting.prefix,
        5 - Math.floor(currentTime),
        SKIPPABLE_TEXT.waiting.suffix
      ].join(' ');
    }
  };

  VideoPlayer.prototype._startAdVideo = function() {
    this._video.states.started = true;
    if (this._skippableButton) {
      this._skippableButton.style.display = 'block';
    }
    if (this._playButtonWrapper) {
      this._playButtonWrapper.style.display = 'none';
    }
  };

  VideoPlayer.prototype._destroy = function() {
    this._slot.removeChild(this._container);
  };

  VideoPlayer.prototype.resizeAd = function(width, height, viewMode) {
    this._attributes.size = {
      width: width,
      height: height
    };
    this._attributes.viewMode = viewMode;
    this._updateSize();
  };

  VideoPlayer.prototype.startAd = function() {
    if (!this._video.states.started) {
      if (!this._video.states.loaded) {
        this._video.states.loaded = true;
      }

      var playVideo = this._video.slot.play();
      // hack for https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
      // try to play video and show play button if handle error
      if (playVideo !== undefined) {
        playVideo
            .then(this._startAdVideo.bind(this))
            .catch(function() {
              this.setAdVolume(0);
              this._video.slot.muted = true;
              this._renderMuteButton();
              this._video.slot.play()
                  .then(this._startAdVideo.bind(this))
                  .catch(this._renderPlayButton.bind(this));
            }.bind(this));
      }
      // if browsers doesn't support promises (edge, ie)
      else {
        this._startAdVideo();
      }
    }
  };

  VideoPlayer.prototype.stopAd = function() {
    if (this._video.states.started && !this._video.states.stopped) {
      this._video.states.stopped = true;
      this._video.slot.pause();
      this._destroy();
      setTimeout(adContainer.events.callEvent.bind(adContainer.events), 100, [AD_EVENTS.stopped]);
    }
  };

  VideoPlayer.prototype.pauseAd = function() {
    if (!this._video.states.paused && this._video.states.started) {
      if (this._video.slot.currentTime / this._video.slot.duration >= 0.98) {
        return;
      }

      this._video.states.paused = true;
      this._video.slot.pause();
    }
  };

  VideoPlayer.prototype.resumeAd = function() {
    if (this._video.states.paused || this._video.slot.paused) {
      this._video.states.paused = false;

      var playVideo = this._video.slot.play();
      // hack for https://developers.google.com/web/updates/2017/09/autoplay-policy-changes
      // try to play video and show play button if handle error
      if (playVideo !== undefined) {
        playVideo
            .catch(function() {
              this.setAdVolume(0);
              this._video.slot.muted = true;
              this._renderMuteButton();
              this._video.slot.play();
            }.bind(this));
      }
    }
  };

  VideoPlayer.prototype.expandAd = function() {};

  VideoPlayer.prototype.collapseAd = function() {};

  VideoPlayer.prototype.skipAd = function() {
    if (!this._attributes.skippableState && this._adParameters.showSkip || !this._adParameters.skippable) {
      return;
    }

    if (this._video.states.started && !this._video.states.stopped) {
      this._video.states.stopped = true;
      this._video.slot.pause();
      this._destroy();

      setTimeout(function() {
        adContainer.events.callEvent(AD_EVENTS.skipped);
        adContainer.events.callEvent(AD_EVENTS.stopped);
      }.bind(this), 100);
    }
  };

  VideoPlayer.prototype.setAdVolume = function(volume) {
    this._attributes.volume = volume;
    try {
      this._video.slot.volume = this._attributes.volume;
    } catch (err) {}
  };

  VideoPlayer.prototype.getAdVolume = function() {
    return this._attributes.volume;
  };

  VideoPlayer.prototype.getAdDuration = function() {
    return this._attributes.duration;
  };

  VideoPlayer.prototype.getAdLinear = function() {
    return this._attributes.linear;
  };

  VideoPlayer.prototype.getAdWidth = function() {
    return this._attributes.size.width;
  };

  VideoPlayer.prototype.getAdHeight = function() {
    return this._attributes.size.height;
  };

  VideoPlayer.prototype.getAdRemainingTime = function() {
    return this._attributes.remainingTime;
  };

  VideoPlayer.prototype.getAdExpanded = function() {
    return this._attributes.expanded;
  };

  VideoPlayer.prototype.getAdSkippableState = function() {
    return this._attributes.skippableState;
  };

  VideoPlayer.prototype.getAdIcons = function() {
    return this._attributes.icons;
  };

  VideoPlayer.prototype.getAdCompanions = function() {
    return this._attributes.companions;
  };

  var adContainer = {
    ad: null, // common vpaid ad interface
    actualVpaidAd: null, // defined on creative type (our vpaid or third party vpaid ad)
    version: '2.0',
    events: null,
    playerCallbacks: {}
  };

  window.getVPAIDAd = function() {
    if (!adContainer.ad) {
      adContainer.ad = new VpaidAd();
      adContainer.events = new VpaidEvents();
    }

    return adContainer.ad;
  };
})(window, document);
