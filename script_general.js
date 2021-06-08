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
    var d = {"paddingTop":0,"propagateClick":false,"mediaActivationMode":"window","mobileMipmappingEnabled":false,"id":"rootPlayer","paddingLeft":0,"gap":10,"verticalAlign":"top","children":["this.MainViewer"],"downloadEnabled":false,"backgroundPreloadEnabled":true,"start":"this.init()","paddingRight":0,"overflow":"hidden","scripts":{"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"quizStart":TDV.Tour.Script.quizStart,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"quizShowScore":TDV.Tour.Script.quizShowScore,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"clone":TDV.Tour.Script.clone,"initAnalytics":TDV.Tour.Script.initAnalytics,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"setValue":TDV.Tour.Script.setValue,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"init":TDV.Tour.Script.init,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"setLocale":TDV.Tour.Script.setLocale,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"getMainViewer":TDV.Tour.Script.getMainViewer,"getPixels":TDV.Tour.Script.getPixels,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"initQuiz":TDV.Tour.Script.initQuiz,"historyGoBack":TDV.Tour.Script.historyGoBack,"getKey":TDV.Tour.Script.getKey,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"registerKey":TDV.Tour.Script.registerKey,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"cloneCamera":TDV.Tour.Script.cloneCamera,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"openLink":TDV.Tour.Script.openLink,"getComponentByName":TDV.Tour.Script.getComponentByName,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"playAudioList":TDV.Tour.Script.playAudioList,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"showPopupImage":TDV.Tour.Script.showPopupImage,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"existsKey":TDV.Tour.Script.existsKey,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"isPanorama":TDV.Tour.Script.isPanorama,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"mixObject":TDV.Tour.Script.mixObject,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"getOverlays":TDV.Tour.Script.getOverlays,"showWindow":TDV.Tour.Script.showWindow,"resumePlayers":TDV.Tour.Script.resumePlayers,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"setMapLocation":TDV.Tour.Script.setMapLocation,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"shareSocial":TDV.Tour.Script.shareSocial,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"translate":TDV.Tour.Script.translate,"textToSpeech":TDV.Tour.Script.textToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaByName":TDV.Tour.Script.getMediaByName,"quizFinish":TDV.Tour.Script.quizFinish},"horizontalAlign":"left","width":"100%","scrollBarMargin":2,"borderRadius":0,"borderSize":0,"scrollBarVisible":"rollOver","desktopMipmappingEnabled":false,"backgroundColor":["#FFFFFF"],"backgroundColorDirection":"vertical","backgroundColorRatios":[0],"scrollBarWidth":10,"contentOpaque":false,"layout":"absolute","height":"100%","minHeight":20,"backgroundOpacity":1,"vrPolyfillScale":0.75,"minWidth":20,"class":"Player","mouseWheelEnabled":true,"scrollBarOpacity":0.5,"data":{"name":"Player615","defaultLocale":"en","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"pitch":1,"volume":1,"stopBackgroundAudio":false,"speechOnTooltip":false,"rate":1},"locales":{"en":"locale/en.txt"}},"shadow":false,"scrollBarColor":"#000000","definitions": [{"toolTipShadowSpread":0,"playbackBarHeadShadowHorizontalLength":0,"id":"MainViewer","subtitlesBackgroundOpacity":0.2,"toolTipBorderColor":"#767676","playbackBarBackgroundColor":["#FFFFFF"],"toolTipFontFamily":"Arial","firstTransitionDuration":0,"playbackBarHeight":10,"transitionDuration":500,"playbackBarHeadBackgroundColorDirection":"vertical","progressBorderColor":"#000000","toolTipFontSize":"1.11vmin","transitionMode":"blending","progressBarBackgroundColor":["#3399FF"],"subtitlesBorderColor":"#FFFFFF","toolTipShadowBlurRadius":3,"playbackBarHeadWidth":6,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundColorDirection":"vertical","surfaceReticleSelectionColor":"#FFFFFF","playbackBarProgressBorderSize":0,"borderRadius":0,"borderSize":0,"subtitlesTextShadowBlurRadius":0,"progressBackgroundColor":["#FFFFFF"],"progressOpacity":1,"toolTipBackgroundColor":"#F6F6F6","subtitlesPaddingBottom":5,"subtitlesFontFamily":"Arial","playbackBarProgressBackgroundColor":["#3399FF"],"toolTipShadowVerticalLength":0,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"toolTipFontStyle":"normal","height":"100%","subtitlesPaddingTop":5,"progressBottom":0,"surfaceReticleSelectionOpacity":1,"progressBarOpacity":1,"subtitlesTextDecoration":"none","playbackBarHeadShadowOpacity":0.7,"width":"100%","subtitlesGap":0,"subtitlesShadow":false,"subtitlesOpacity":1,"toolTipOpacity":1,"vrPointerSelectionTime":2000,"doubleClickAction":"toggle_fullscreen","displayTooltipInTouchScreens":true,"playbackBarHeadShadowBlurRadius":3,"subtitlesBackgroundColor":"#000000","toolTipTextShadowBlurRadius":3,"shadow":false,"progressHeight":10,"playbackBarBackgroundOpacity":1,"progressBorderSize":0,"toolTipBorderSize":1,"toolTipHorizontalAlign":"center","playbackBarProgressBackgroundColorRatios":[0],"paddingTop":0,"subtitlesTextShadowOpacity":1,"progressBackgroundColorRatios":[0],"progressBarBorderRadius":0,"paddingBottom":0,"playbackBarBorderColor":"#FFFFFF","surfaceReticleColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarBorderRadius":0,"toolTipPaddingBottom":4,"subtitlesVerticalAlign":"bottom","subtitlesHorizontalAlign":"center","propagateClick":false,"progressBarBackgroundColorDirection":"vertical","playbackBarLeft":0,"toolTipPaddingTop":4,"playbackBarHeadShadowColor":"#000000","subtitlesEnabled":true,"playbackBarHeadHeight":15,"toolTipPaddingRight":6,"toolTipDisplayTime":600,"subtitlesBorderSize":0,"paddingLeft":0,"toolTipShadowOpacity":1,"toolTipShadowColor":"#333333","subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"playbackBarProgressBorderColor":"#000000","paddingRight":0,"playbackBarHeadBorderSize":0,"playbackBarHeadBackgroundColorRatios":[0,1],"surfaceReticleOpacity":0.6,"playbackBarHeadBorderRadius":0,"toolTipBorderRadius":3,"subtitlesTextShadowHorizontalLength":1,"progressBorderRadius":0,"playbackBarProgressOpacity":1,"playbackBarHeadOpacity":1,"progressBackgroundOpacity":1,"playbackBarHeadShadow":true,"subtitlesFontWeight":"normal","progressBarBorderColor":"#000000","playbackBarHeadBorderColor":"#000000","progressLeft":0,"playbackBarBorderSize":0,"vrPointerColor":"#FFFFFF","toolTipShadowHorizontalLength":0,"minHeight":50,"subtitlesPaddingLeft":5,"progressRight":0,"toolTipTextShadowColor":"#000000","subtitlesBottom":50,"playbackBarOpacity":1,"toolTipPaddingLeft":6,"minWidth":100,"playbackBarHeadBackgroundColor":["#111111","#666666"],"subtitlesTop":0,"class":"ViewerArea","toolTipFontWeight":"normal","displayTooltipInSurfaceSelection":true,"toolTipTextShadowOpacity":0,"playbackBarHeadShadowVerticalLength":0,"subtitlesTextShadowColor":"#000000","playbackBarBottom":5,"progressBackgroundColorDirection":"vertical","progressBarBackgroundColorRatios":[0],"playbackBarProgressBackgroundColorDirection":"vertical","subtitlesPaddingRight":5,"toolTipFontColor":"#606060","data":{"name":"Main Viewer"},"subtitlesFontSize":"3vmin"},{"label":trans('panorama_E600E017_E87C_0277_41E9_223ACDCA141A.label'),"id":"panorama_E600E017_E87C_0277_41E9_223ACDCA141A","hfovMin":"150%","pitch":0,"partial":false,"class":"Panorama","hfov":360,"overlays":["this.overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4"],"data":{"label":"dipo 2"},"thumbnailUrl":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_t.jpg","adjacentPanoramas":[{"yaw":-82.78,"class":"AdjacentPanorama","distance":33.14,"panorama":"this.panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45","backwardYaw":112.36,"select":"this.overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"frames":[{"cube":{"levels":[{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"rowCount":2,"colCount":12,"height":1024},{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"rowCount":1,"colCount":6,"height":512},{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","width":6144,"rowCount":1,"colCount":6,"height":1024}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_t.jpg"}],"vfov":180},{"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_E600E017_E87C_0277_41E9_223ACDCA141A_camera","initialSequence":"this.sequence_E557CCC7_E87C_03D7_41E7_5378C7ED9D1C","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"items":[{"media":"this.panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45_camera"},{"media":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A_camera"}],"id":"mainPlayList","class":"PlayList"},{"label":trans('panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45.label'),"id":"panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45","hfovMin":"150%","pitch":0,"partial":false,"class":"Panorama","hfov":360,"overlays":["this.overlay_E6E3C85A_EA90_0153_41E7_1E353F9A8CC5"],"data":{"label":"dipo 1"},"thumbnailUrl":"media/panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45_t.jpg","adjacentPanoramas":[{"yaw":112.36,"class":"AdjacentPanorama","distance":12,"panorama":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A","backwardYaw":-82.78,"select":"this.overlay_E6E3C85A_EA90_0153_41E7_1E353F9A8CC5.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMax":130,"frames":[{"cube":{"levels":[{"url":"media/panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"rowCount":2,"colCount":12,"height":1024},{"url":"media/panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"rowCount":1,"colCount":6,"height":512},{"url":"media/panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","width":6144,"rowCount":1,"colCount":6,"height":1024}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45_t.jpg"}],"vfov":180},{"class":"PanoramaCamera","automaticZoomSpeed":10,"id":"panorama_E6E0185A_EA90_0153_41A7_9A03995ADE45_camera","initialSequence":"this.sequence_E2615CFF_E864_03B7_41E0_13000110C70E","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0}},{"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","zoomEnabled":true,"surfaceSelectionEnabled":false,"arrowKeysAction":"translate","displayPlaybackBar":true,"id":"MainViewerPanoramaPlayer","touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","viewerArea":"this.MainViewer"},{"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_E5E3C414_E87C_0249_41B5_032C55EC4FDF"],"items":[{"class":"HotspotPanoramaOverlayImage","hfov":9.16,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"verticalAlign":"middle","vfov":8.44,"distance":50,"image":"this.res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","pitch":-2.94,"yaw":-82.78}],"id":"overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4","data":{"label":"Image","hasPanoramaAction":true},"maps":[]},{"id":"sequence_E557CCC7_E87C_03D7_41E7_5378C7ED9D1C","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false},{"rollOverDisplay":false,"class":"HotspotPanoramaOverlay","enabledInCardboard":true,"useHandCursor":true,"areas":["this.HotspotPanoramaOverlayArea_E4D846AD_E87C_0E5B_41DB_736F23445A13"],"items":[{"class":"HotspotPanoramaOverlayImage","hfov":10.57,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"verticalAlign":"middle","vfov":11.45,"distance":50,"image":"this.res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","pitch":-8.06,"yaw":112.36}],"id":"overlay_E6E3C85A_EA90_0153_41E7_1E353F9A8CC5","data":{"label":"Image","hasPanoramaAction":true},"maps":[]},{"id":"sequence_E2615CFF_E864_03B7_41E0_13000110C70E","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}],"restartMovementOnUserInteraction":false},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 0)","id":"HotspotPanoramaOverlayArea_E5E3C414_E87C_0249_41B5_032C55EC4FDF","class":"HotspotPanoramaOverlayArea"},{"levels":[{"url":"media/res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452_0.png","width":100,"class":"ImageResourceLevel","height":100}],"id":"res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","class":"ImageResource"},{"mapColor":"any","click":"this.mainPlayList.set('selectedIndex', 1)","id":"HotspotPanoramaOverlayArea_E4D846AD_E87C_0E5B_41DB_736F23445A13","class":"HotspotPanoramaOverlayArea"}],"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","paddingBottom":0};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.4.js.map
//Generated with v2021.0.4, Tue Jun 8 2021