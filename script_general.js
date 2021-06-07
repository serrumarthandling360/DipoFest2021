(function () {
    var c = {};
    function trans(e, f) {
        var g = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
        c[g[0x0]] = g;
        return '';
    }
    function regTextVar(h, i) {
        var j = ![];
        i = i['toLowerCase']();
        var k = function () {
            var t = this['get']('data');
            t['updateText'](t['translateObjs'][h]);
        };
        var l = function (u) {
            var v = u['data']['nextSelectedIndex'];
            if (v >= 0x0) {
                var w = u['source']['get']('items')[v];
                var x = function () {
                    w['unbind']('begin', x, this);
                    k['call'](this);
                };
                w['bind']('begin', x, this);
            } else
                k['call'](this);
        };
        var m = function (y) {
            return function (z) {
                if (y in z) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var n = function (A, B) {
            return function (C, D) {
                if (A == C && B in D) {
                    k['call'](this);
                }
            }['bind'](this);
        };
        var o = function (E, F, G) {
            for (var H = 0x0; H < E['length']; ++H) {
                var I = E[H];
                var J = I['get']('selectedIndex');
                if (J >= 0x0) {
                    var K = F['split']('.');
                    var L = I['get']('items')[J];
                    if (G !== undefined && !G['call'](this, L))
                        continue;
                    for (var M = 0x0; M < K['length']; ++M) {
                        if (L == undefined)
                            return '';
                        L = 'get' in L ? L['get'](K[M]) : L[K[M]];
                    }
                    return L;
                }
            }
            return '';
        };
        var p = function (N) {
            var O = N['get']('player');
            return O !== undefined && O['get']('viewerArea') == this['getMainViewer']();
        };
        switch (i) {
        case 'title':
        case 'subtitle':
            var r = function () {
                switch (i) {
                case 'title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                }
            }();
            if (r) {
                return function () {
                    var P = this['_getPlayListsWithViewer'](this['getMainViewer']());
                    if (!j) {
                        for (var Q = 0x0; Q < P['length']; ++Q) {
                            P[Q]['bind']('changing', l, this);
                        }
                        j = !![];
                    }
                    return o['call'](this, P, r, p);
                };
            }
            break;
        default:
            if (i['startsWith']('quiz.') && 'Quiz' in TDV) {
                var s = undefined;
                var r = function () {
                    switch (i) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var R = /quiz\.([\w_]+)\.(.+)/['exec'](i);
                        if (R) {
                            s = R[0x1];
                            switch ('quiz.' + R[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (r) {
                    return function () {
                        var S = this['get']('data')['quiz'];
                        if (S) {
                            if (!j) {
                                if (s != undefined)
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, W[Y]['id'], r), this);
                                        }
                                    } else {
                                        S['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], n['call'](this, s, r), this);
                                    }
                                else
                                    S['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], m['call'](this, r), this);
                                j = !![];
                            }
                            try {
                                var a1 = 0x0;
                                if (s != undefined) {
                                    if (s == 'global') {
                                        var U = this['get']('data')['quizConfig'];
                                        var W = U['objectives'];
                                        for (var Y = 0x0, a0 = W['length']; Y < a0; ++Y) {
                                            a1 += S['getObjective'](W[Y]['id'], r);
                                        }
                                    } else {
                                        a1 = S['getObjective'](s, r);
                                    }
                                } else {
                                    a1 = S['get'](r);
                                    if (r == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        a1 += 0x1;
                                }
                                return a1;
                            } catch (a2) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return '';
    }
    function createQuizConfig(player, a3) {
        var a4 = {};
        a4['player'] = player;
        a4['playList'] = a3;
        function a5(a8) {
            for (var a9 = 0x0; a9 < a8['length']; ++a9) {
                var aa = a8[a9];
                if ('id' in aa)
                    player[aa['id']] = aa;
            }
        }
        if (a4['questions']) {
            a5(a4['questions']);
            for (var a6 = 0x0; a6 < a4['questions']['length']; ++a6) {
                var a7 = a4['questions'][a6];
                a5(a7['options']);
            }
        }
        if (a4['objectives']) {
            a5(a4['objectives']);
        }
        if (a4['califications']) {
            a5(a4['califications']);
        }
        if (a4['score']) {
            player[a4['score']['id']] = a4['score'];
        }
        if (a4['question']) {
            player[a4['question']['id']] = a4['question'];
        }
        if (a4['timeout']) {
            player[a4['timeout']['id']] = a4['timeout'];
        }
        player['get']('data')['translateObjs'] = c;
        return a4;
    }
    var d = {"propagateClick":false,"defaultVRPointer":"laser","mobileMipmappingEnabled":false,"id":"rootPlayer","mediaActivationMode":"window","paddingLeft":0,"gap":10,"verticalAlign":"top","children":["this.MainViewer"],"downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.init()","definitions": [{"automaticZoomSpeed":10,"id":"panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_camera","initialSequence":"this.sequence_E2615CFF_E864_03B7_41E0_13000110C70E","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"items":[{"media":"this.panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B","camera":"this.panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"},{"media":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A","end":"this.trigger('tourEnded')","camera":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A_camera","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","surfaceSelectionEnabled":false,"zoomEnabled":true,"arrowKeysAction":"translate","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer"},{"label":trans('panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B.label'),"id":"panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B","hfovMin":"150%","pitch":0,"partial":false,"hfov":360,"overlays":["this.overlay_E5604647_E87C_0ED7_41D1_C1FC13E620DA"],"data":{"label":"dipo 1"},"class":"Panorama","thumbnailUrl":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A","distance":12,"select":"this.overlay_E5604647_E87C_0ED7_41D1_C1FC13E620DA.get('areas').forEach(function(a){ a.trigger('click') })","yaw":112.36,"backwardYaw":-82.78,"class":"AdjacentPanorama"}],"hfovMax":130,"frames":[{"cube":{"levels":[{"url":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_0/{face}/0/{row}_{column}.jpg","colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand","height":1024},{"url":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_0/{face}/1/{row}_{column}.jpg","colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"],"height":512},{"url":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_0/{face}/vr/0.jpg","colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","width":6144,"tags":"mobilevr","height":1024}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_t.jpg"}],"vfov":180},{"toolTipShadowSpread":0,"id":"MainViewer","subtitlesBackgroundOpacity":0.2,"toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","firstTransitionDuration":0,"playbackBarHeight":10,"transitionDuration":500,"playbackBarHeadBackgroundColorDirection":"vertical","progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","transitionMode":"blending","progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","toolTipShadowBlurRadius":3,"playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderSize":0,"borderRadius":0,"borderSize":0,"subtitlesTextShadowBlurRadius":0,"progressBackgroundColor":["#FFFFFF"],"progressOpacity":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesPaddingBottom":5,"subtitlesTextShadowHorizontalLength":1,"subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowVerticalLength":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipFontStyle":"normal","height":"100%","subtitlesPaddingTop":5,"progressBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"subtitlesTextDecoration":"none","playbackBarHeadShadowOpacity":0.7,"width":"100%","subtitlesGap":0,"subtitlesTextShadowVerticalLength":1,"subtitlesShadow":false,"subtitlesOpacity":1,"toolTipOpacity":1,"vrPointerSelectionTime":2000,"doubleClickAction":"toggle_fullscreen","toolTipHorizontalAlign":"center","displayTooltipInTouchScreens":true,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","toolTipTextShadowBlurRadius":3,"progressHeight":10,"playbackBarBackgroundOpacity":1,"progressBorderSize":0,"toolTipBorderSize":1,"shadow":false,"playbackBarProgressBackgroundColorRatios":[0],"progressBarBorderRadius":0,"subtitlesTextShadowOpacity":1,"progressBackgroundColorRatios":[0],"toolTipPaddingBottom":4,"paddingBottom":0,"playbackBarBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBorderRadius":0,"paddingTop":0,"subtitlesVerticalAlign":"bottom","subtitlesHorizontalAlign":"center","propagateClick":false,"progressBarBackgroundColorDirection":"vertical","playbackBarLeft":0,"toolTipPaddingTop":4,"playbackBarHeadShadowColor":"#000000","subtitlesEnabled":true,"playbackBarHeadShadowVerticalLength":0,"playbackBarHeadHeight":15,"toolTipPaddingRight":6,"toolTipDisplayTime":600,"subtitlesBorderSize":0,"paddingLeft":0,"toolTipShadowOpacity":1,"toolTipShadowColor":"#333333","subtitlesFontColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","paddingRight":0,"playbackBarHeadShadowHorizontalLength":0,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"surfaceReticleOpacity":0.6,"playbackBarHeadBorderRadius":0,"toolTipBorderRadius":3,"progressBorderRadius":0,"playbackBarProgressOpacity":1,"playbackBarHeadOpacity":1,"progressBackgroundOpacity":1,"playbackBarHeadShadow":true,"subtitlesFontWeight":"normal","progressBarBorderColor":"#000000","playbackBarHeadBorderColor":"#000000","progressLeft":0,"playbackBarBorderSize":0,"vrPointerColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"minHeight":50,"subtitlesPaddingLeft":5,"progressRight":0,"toolTipTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarOpacity":1,"toolTipPaddingLeft":6,"minWidth":100,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"toolTipFontWeight":"normal","displayTooltipInSurfaceSelection":true,"toolTipTextShadowOpacity":0,"progressBarBackgroundColorRatios":[0],"subtitlesTextShadowColor":"#000000","class":"ViewerArea","playbackBarBottom":5,"progressBackgroundColorDirection":"vertical","data":{"name":"Main Viewer"},"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesPaddingRight":5,"toolTipFontColor":"#606060","subtitlesFontSize":"3vmin"},{"automaticZoomSpeed":10,"id":"panorama_E600E017_E87C_0277_41E9_223ACDCA141A_camera","initialSequence":"this.sequence_E557CCC7_E87C_03D7_41E7_5378C7ED9D1C","class":"PanoramaCamera","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"label":trans('panorama_E600E017_E87C_0277_41E9_223ACDCA141A.label'),"id":"panorama_E600E017_E87C_0277_41E9_223ACDCA141A","hfovMin":"150%","pitch":0,"partial":false,"hfov":360,"overlays":["this.overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4"],"data":{"label":"dipo 2"},"class":"Panorama","thumbnailUrl":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_t.jpg","adjacentPanoramas":[{"panorama":"this.panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B","distance":33.14,"select":"this.overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4.get('areas').forEach(function(a){ a.trigger('click') })","yaw":-82.78,"backwardYaw":112.36,"class":"AdjacentPanorama"}],"hfovMax":130,"frames":[{"cube":{"levels":[{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/0/{row}_{column}.jpg","colCount":12,"rowCount":2,"class":"TiledImageResourceLevel","width":6144,"tags":"ondemand","height":1024},{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/1/{row}_{column}.jpg","colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","width":3072,"tags":["ondemand","preload"],"height":512},{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/vr/0.jpg","colCount":6,"rowCount":1,"class":"TiledImageResourceLevel","width":6144,"tags":"mobilevr","height":1024}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_t.jpg"}],"vfov":180},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false,"id":"sequence_E2615CFF_E864_03B7_41E0_13000110C70E","class":"PanoramaCameraSequence"},{"rollOverDisplay":false,"enabledInCardboard":true,"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_E4D846AD_E87C_0E5B_41DB_736F23445A13"],"items":[{"hfov":10.57,"verticalAlign":"middle","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage","vfov":11.45,"distance":50,"image":"this.res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","pitch":-8.06,"yaw":112.36}],"id":"overlay_E5604647_E87C_0ED7_41D1_C1FC13E620DA","data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","maps":[]},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"easing":"linear","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false,"id":"sequence_E557CCC7_E87C_03D7_41E7_5378C7ED9D1C","class":"PanoramaCameraSequence"},{"rollOverDisplay":false,"enabledInCardboard":true,"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_E5E3C414_E87C_0249_41B5_032C55EC4FDF"],"items":[{"hfov":9.16,"verticalAlign":"middle","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"class":"HotspotPanoramaOverlayImage","vfov":8.44,"distance":50,"image":"this.res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","pitch":-2.94,"yaw":-82.78}],"id":"overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4","data":{"label":"Image","hasPanoramaAction":true},"class":"HotspotPanoramaOverlay","maps":[]},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_E4D846AD_E87C_0E5B_41DB_736F23445A13","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452_0.png","width":100,"class":"ImageResourceLevel","height":100}],"id":"res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","class":"ImageResource"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_E5E3C414_E87C_0249_41B5_032C55EC4FDF","class":"HotspotPanoramaOverlayArea"}],"paddingRight":0,"overflow":"hidden","scripts":{"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"shareSocial":TDV.Tour.Script.shareSocial,"clone":TDV.Tour.Script.clone,"historyGoForward":TDV.Tour.Script.historyGoForward,"setValue":TDV.Tour.Script.setValue,"getMediaByName":TDV.Tour.Script.getMediaByName,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPixels":TDV.Tour.Script.getPixels,"cloneCamera":TDV.Tour.Script.cloneCamera,"init":TDV.Tour.Script.init,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"registerKey":TDV.Tour.Script.registerKey,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"historyGoBack":TDV.Tour.Script.historyGoBack,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getKey":TDV.Tour.Script.getKey,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"initAnalytics":TDV.Tour.Script.initAnalytics,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"existsKey":TDV.Tour.Script.existsKey,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getComponentByName":TDV.Tour.Script.getComponentByName,"getOverlays":TDV.Tour.Script.getOverlays,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"playAudioList":TDV.Tour.Script.playAudioList,"resumePlayers":TDV.Tour.Script.resumePlayers,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openLink":TDV.Tour.Script.openLink,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setMapLocation":TDV.Tour.Script.setMapLocation,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"textToSpeech":TDV.Tour.Script.textToSpeech,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"mixObject":TDV.Tour.Script.mixObject,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initQuiz":TDV.Tour.Script.initQuiz,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"quizStart":TDV.Tour.Script.quizStart,"quizShowScore":TDV.Tour.Script.quizShowScore,"quizFinish":TDV.Tour.Script.quizFinish,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"isPanorama":TDV.Tour.Script.isPanorama,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"translate":TDV.Tour.Script.translate,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"showWindow":TDV.Tour.Script.showWindow,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"showPopupImage":TDV.Tour.Script.showPopupImage,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"unregisterKey":TDV.Tour.Script.unregisterKey,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getMediaHeight":TDV.Tour.Script.getMediaHeight},"horizontalAlign":"left","width":"100%","scrollBarMargin":2,"borderRadius":0,"borderSize":0,"scrollBarVisible":"rollOver","desktopMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"scrollBarWidth":10,"contentOpaque":false,"layout":"absolute","height":"100%","minHeight":20,"backgroundOpacity":1,"vrPolyfillScale":0.75,"toolTipHorizontalAlign":"center","minWidth":20,"scrollBarOpacity":0.5,"data":{"name":"Player615","defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"rate":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"volume":1},"locales":{"en":"locale/en.txt"}},"shadow":false,"scrollBarColor":"#000000","class":"Player","mouseWheelEnabled":true,"paddingTop":0,"paddingBottom":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.4.js.map
//Generated with v2021.0.4, Tue Jun 8 2021