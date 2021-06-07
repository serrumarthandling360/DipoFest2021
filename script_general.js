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
    var d = {"scrollBarColor":"#000000","paddingBottom":0,"id":"rootPlayer","verticalAlign":"top","width":"100%","scrollBarOpacity":0.5,"children":["this.MainViewer"],"propagateClick":false,"gap":10,"start":"this.init()","paddingLeft":0,"borderSize":0,"horizontalAlign":"left","contentOpaque":false,"toolTipHorizontalAlign":"center","defaultVRPointer":"laser","definitions": [{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","id":"panorama_E600E017_E87C_0277_41E9_223ACDCA141A_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_E557CCC7_E87C_03D7_41E7_5378C7ED9D1C"},{"viewerArea":"this.MainViewer","displayPlaybackBar":true,"zoomEnabled":true,"class":"PanoramaPlayer","gyroscopeVerticalDraggingEnabled":true,"id":"MainViewerPanoramaPlayer","mouseControlMode":"drag_rotation","arrowKeysAction":"translate","surfaceSelectionEnabled":false,"touchControlMode":"drag_rotation"},{"thumbnailUrl":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_t.jpg","hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/0/{row}_{column}.jpg","width":6144,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","height":1024,"colCount":12},{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/1/{row}_{column}.jpg","width":3072,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"height":512,"colCount":6},{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/vr/0.jpg","width":6144,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","height":1024,"colCount":6}]},"thumbnailUrl":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_t.jpg"}],"id":"panorama_E600E017_E87C_0277_41E9_223ACDCA141A","label":trans('panorama_E600E017_E87C_0277_41E9_223ACDCA141A.label'),"overlays":["this.overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4"],"pitch":0,"hfov":360,"class":"Panorama","partial":false,"vfov":180,"data":{"label":"dipo 2"},"hfovMin":"150%","adjacentPanoramas":[{"distance":33.14,"select":"this.overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":112.36,"panorama":"this.panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B","class":"AdjacentPanorama","yaw":-82.78}]},{"initialPosition":{"class":"PanoramaCameraPosition","yaw":0,"pitch":0},"class":"PanoramaCamera","id":"panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_camera","automaticZoomSpeed":10,"initialSequence":"this.sequence_E2615CFF_E864_03B7_41E0_13000110C70E"},{"class":"PlayList","items":[{"begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","media":"this.panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B","camera":"this.panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"},{"begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","media":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A","end":"this.trigger('tourEnded')","camera":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A_camera","class":"PanoramaPlayListItem","player":"this.MainViewerPanoramaPlayer"}],"id":"mainPlayList"},{"playbackBarHeight":10,"subtitlesBorderColor":"#FFFFFF","toolTipFontFamily":"Arial","progressBackgroundColor":["#FFFFFF"],"id":"MainViewer","toolTipFontWeight":"normal","playbackBarHeadShadowHorizontalLength":0,"toolTipTextShadowBlurRadius":3,"toolTipFontColor":"#606060","playbackBarRight":0,"shadow":false,"progressBarOpacity":1,"playbackBarBackgroundColorDirection":"vertical","toolTipBackgroundColor":"#F6F6F6","playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"subtitlesTextDecoration":"none","width":"100%","progressBottom":0,"subtitlesBackgroundOpacity":0.2,"progressHeight":10,"subtitlesFontFamily":"Arial","toolTipFontSize":"1.11vmin","progressBorderSize":0,"toolTipShadowSpread":0,"subtitlesTextShadowBlurRadius":0,"paddingLeft":0,"borderSize":0,"toolTipShadowHorizontalLength":0,"progressBarBorderColor":"#000000","playbackBarHeadShadowOpacity":0.7,"progressBarBorderRadius":0,"subtitlesPaddingTop":5,"toolTipHorizontalAlign":"center","playbackBarProgressBackgroundColor":["#3399FF"],"subtitlesShadow":false,"progressBackgroundColorRatios":[0],"subtitlesOpacity":1,"playbackBarHeadShadowVerticalLength":0,"subtitlesGap":0,"paddingRight":0,"class":"ViewerArea","doubleClickAction":"toggle_fullscreen","playbackBarLeft":0,"borderRadius":0,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesVerticalAlign":"bottom","displayTooltipInTouchScreens":true,"subtitlesHorizontalAlign":"center","toolTipOpacity":1,"progressBarBorderSize":0,"playbackBarBorderColor":"#FFFFFF","playbackBarHeadHeight":15,"playbackBarBorderRadius":0,"surfaceReticleColor":"#FFFFFF","firstTransitionDuration":0,"subtitlesTextShadowOpacity":1,"playbackBarHeadShadowColor":"#000000","toolTipFontStyle":"normal","progressRight":0,"playbackBarProgressBorderColor":"#000000","subtitlesBackgroundColor":"#000000","progressOpacity":1,"minHeight":50,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBarBackgroundColorRatios":[0],"progressBarBackgroundColorDirection":"vertical","toolTipBorderSize":1,"toolTipPaddingLeft":6,"paddingBottom":0,"toolTipPaddingTop":4,"playbackBarHeadShadowBlurRadius":3,"minWidth":100,"playbackBarHeadShadow":true,"progressBackgroundColorDirection":"vertical","paddingTop":0,"playbackBarHeadBorderSize":0,"subtitlesTextShadowVerticalLength":1,"toolTipPaddingRight":6,"playbackBarHeadBorderRadius":0,"toolTipPaddingBottom":4,"progressBorderRadius":0,"playbackBarBackgroundOpacity":1,"progressLeft":0,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadOpacity":1,"subtitlesFontColor":"#FFFFFF","playbackBarProgressOpacity":1,"height":"100%","subtitlesTextShadowHorizontalLength":1,"toolTipShadowOpacity":1,"toolTipShadowColor":"#333333","toolTipShadowVerticalLength":0,"playbackBarHeadBorderColor":"#000000","propagateClick":false,"playbackBarBorderSize":0,"surfaceReticleSelectionOpacity":1,"subtitlesEnabled":true,"subtitlesFontWeight":"normal","subtitlesBorderSize":0,"playbackBarOpacity":1,"toolTipBorderRadius":3,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesBottom":50,"subtitlesPaddingLeft":5,"subtitlesTop":0,"subtitlesPaddingRight":5,"surfaceReticleOpacity":0.6,"vrPointerSelectionTime":2000,"vrPointerColor":"#FFFFFF","subtitlesTextShadowColor":"#000000","toolTipDisplayTime":600,"playbackBarProgressBackgroundColorDirection":"vertical","toolTipTextShadowColor":"#000000","progressBackgroundOpacity":1,"playbackBarBottom":5,"playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"progressBorderColor":"#000000","toolTipShadowBlurRadius":3,"subtitlesPaddingBottom":5,"toolTipBorderColor":"#767676","subtitlesFontSize":"3vmin","toolTipTextShadowOpacity":0,"transitionMode":"blending","vrPointerSelectionColor":"#FF6600","playbackBarHeadBackgroundColorDirection":"vertical","displayTooltipInSurfaceSelection":true,"playbackBarHeadWidth":6,"transitionDuration":500,"data":{"name":"Main Viewer"}},{"thumbnailUrl":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_t.jpg","hfovMax":130,"frames":[{"class":"CubicPanoramaFrame","cube":{"class":"ImageResource","levels":[{"url":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_0/{face}/0/{row}_{column}.jpg","width":6144,"class":"TiledImageResourceLevel","rowCount":2,"tags":"ondemand","height":1024,"colCount":12},{"url":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_0/{face}/1/{row}_{column}.jpg","width":3072,"class":"TiledImageResourceLevel","rowCount":1,"tags":["ondemand","preload"],"height":512,"colCount":6},{"url":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_0/{face}/vr/0.jpg","width":6144,"class":"TiledImageResourceLevel","rowCount":1,"tags":"mobilevr","height":1024,"colCount":6}]},"thumbnailUrl":"media/panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B_t.jpg"}],"id":"panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B","label":trans('panorama_E34FB7DC_E864_0DF9_41E7_545EBF36E73B.label'),"overlays":["this.overlay_E5604647_E87C_0ED7_41D1_C1FC13E620DA"],"pitch":0,"hfov":360,"class":"Panorama","partial":false,"vfov":180,"data":{"label":"dipo 1"},"hfovMin":"150%","adjacentPanoramas":[{"distance":12,"select":"this.overlay_E5604647_E87C_0ED7_41D1_C1FC13E620DA.get('areas').forEach(function(a){ a.trigger('click') })","backwardYaw":-82.78,"panorama":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A","class":"AdjacentPanorama","yaw":112.36}]},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_E557CCC7_E87C_03D7_41E7_5378C7ED9D1C","restartMovementOnUserInteraction":false},{"maps":[],"enabledInCardboard":true,"rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_E5E3C414_E87C_0249_41B5_032C55EC4FDF"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"verticalAlign":"middle","vfov":8.44,"distance":50,"image":"this.res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","pitch":-2.94,"hfov":9.16,"yaw":-82.78}],"id":"overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4","data":{"label":"Image","hasPanoramaAction":true}},{"class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"id":"sequence_E2615CFF_E864_03B7_41E0_13000110C70E","restartMovementOnUserInteraction":false},{"maps":[],"enabledInCardboard":true,"rollOverDisplay":false,"areas":["this.HotspotPanoramaOverlayArea_E4D846AD_E87C_0E5B_41DB_736F23445A13"],"class":"HotspotPanoramaOverlay","useHandCursor":true,"items":[{"class":"HotspotPanoramaOverlayImage","horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"verticalAlign":"middle","vfov":11.45,"distance":50,"image":"this.res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","pitch":-8.06,"hfov":10.57,"yaw":112.36}],"id":"overlay_E5604647_E87C_0ED7_41D1_C1FC13E620DA","data":{"label":"Image","hasPanoramaAction":true}},{"class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_E5E3C414_E87C_0249_41B5_032C55EC4FDF","mapColor":"any"},{"class":"ImageResource","id":"res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","levels":[{"class":"ImageResourceLevel","url":"media/res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452_0.png","width":100,"height":100}]},{"class":"HotspotPanoramaOverlayArea","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_E4D846AD_E87C_0E5B_41DB_736F23445A13","mapColor":"any"}],"paddingRight":0,"scrollBarMargin":2,"mobileMipmappingEnabled":false,"scrollBarVisible":"rollOver","borderRadius":0,"class":"Player","vrPolyfillScale":0.75,"overflow":"hidden","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"downloadEnabled":false,"backgroundColor":["#FFFFFF"],"backgroundPreloadEnabled":true,"scrollBarWidth":10,"scripts":{"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"isPanorama":TDV.Tour.Script.isPanorama,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"resumePlayers":TDV.Tour.Script.resumePlayers,"quizStart":TDV.Tour.Script.quizStart,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getComponentByName":TDV.Tour.Script.getComponentByName,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"mixObject":TDV.Tour.Script.mixObject,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"clone":TDV.Tour.Script.clone,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"quizFinish":TDV.Tour.Script.quizFinish,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"init":TDV.Tour.Script.init,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getPixels":TDV.Tour.Script.getPixels,"getOverlays":TDV.Tour.Script.getOverlays,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setLocale":TDV.Tour.Script.setLocale,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"historyGoForward":TDV.Tour.Script.historyGoForward,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"textToSpeech":TDV.Tour.Script.textToSpeech,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getKey":TDV.Tour.Script.getKey,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"showWindow":TDV.Tour.Script.showWindow,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"showPopupImage":TDV.Tour.Script.showPopupImage,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"openLink":TDV.Tour.Script.openLink,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMapLocation":TDV.Tour.Script.setMapLocation,"initQuiz":TDV.Tour.Script.initQuiz,"historyGoBack":TDV.Tour.Script.historyGoBack,"shareSocial":TDV.Tour.Script.shareSocial,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"existsKey":TDV.Tour.Script.existsKey,"getMediaByName":TDV.Tour.Script.getMediaByName,"unregisterKey":TDV.Tour.Script.unregisterKey,"playAudioList":TDV.Tour.Script.playAudioList,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"registerKey":TDV.Tour.Script.registerKey,"setValue":TDV.Tour.Script.setValue,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"cloneCamera":TDV.Tour.Script.cloneCamera,"translate":TDV.Tour.Script.translate,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMainViewer":TDV.Tour.Script.getMainViewer,"initAnalytics":TDV.Tour.Script.initAnalytics,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"quizShowScore":TDV.Tour.Script.quizShowScore,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"copyToClipboard":TDV.Tour.Script.copyToClipboard},"height":"100%","layout":"absolute","mouseWheelEnabled":true,"desktopMipmappingEnabled":false,"minHeight":20,"shadow":false,"data":{"defaultLocale":"en","name":"Player615","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"speechOnQuizQuestion":false,"stopBackgroundAudio":false,"pitch":1,"speechOnInfoWindow":false,"speechOnTooltip":false,"volume":1,"rate":1}},"paddingTop":0,"mediaActivationMode":"window","minWidth":20,"backgroundOpacity":1};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.4.js.map
//Generated with v2021.0.4, Tue Jun 8 2021