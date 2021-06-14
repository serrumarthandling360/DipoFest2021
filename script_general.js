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
    var d = {"mouseWheelEnabled":true,"contentOpaque":false,"paddingBottom":0,"id":"rootPlayer","gap":10,"width":"100%","scrollBarMargin":2,"paddingLeft":0,"backgroundPreloadEnabled":true,"start":"this.init()","class":"Player","children":["this.MainViewer"],"borderRadius":0,"verticalAlign":"top","paddingRight":0,"scrollBarWidth":10,"horizontalAlign":"left","backgroundColorDirection":"vertical","backgroundColorRatios":[0],"borderSize":0,"defaultVRPointer":"laser","toolTipHorizontalAlign":"center","desktopMipmappingEnabled":false,"layout":"absolute","backgroundColor":["#FFFFFF"],"overflow":"hidden","vrPolyfillScale":0.75,"minHeight":20,"minWidth":20,"scrollBarOpacity":0.5,"shadow":false,"scrollBarVisible":"rollOver","downloadEnabled":false,"propagateClick":false,"backgroundOpacity":1,"scrollBarColor":"#000000","paddingTop":0,"scripts":{"getMediaHeight":TDV.Tour.Script.getMediaHeight,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getMediaByName":TDV.Tour.Script.getMediaByName,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"clone":TDV.Tour.Script.clone,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setLocale":TDV.Tour.Script.setLocale,"setValue":TDV.Tour.Script.setValue,"playAudioList":TDV.Tour.Script.playAudioList,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"getPixels":TDV.Tour.Script.getPixels,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"init":TDV.Tour.Script.init,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"historyGoForward":TDV.Tour.Script.historyGoForward,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"quizShowScore":TDV.Tour.Script.quizShowScore,"resumePlayers":TDV.Tour.Script.resumePlayers,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"showWindow":TDV.Tour.Script.showWindow,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isPanorama":TDV.Tour.Script.isPanorama,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"existsKey":TDV.Tour.Script.existsKey,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"registerKey":TDV.Tour.Script.registerKey,"getKey":TDV.Tour.Script.getKey,"quizStart":TDV.Tour.Script.quizStart,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizFinish":TDV.Tour.Script.quizFinish,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"openLink":TDV.Tour.Script.openLink,"textToSpeech":TDV.Tour.Script.textToSpeech,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"shareSocial":TDV.Tour.Script.shareSocial,"historyGoBack":TDV.Tour.Script.historyGoBack,"cloneCamera":TDV.Tour.Script.cloneCamera,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"unregisterKey":TDV.Tour.Script.unregisterKey,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"getMainViewer":TDV.Tour.Script.getMainViewer,"initQuiz":TDV.Tour.Script.initQuiz,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"mixObject":TDV.Tour.Script.mixObject,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"translate":TDV.Tour.Script.translate,"getOverlays":TDV.Tour.Script.getOverlays,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setMapLocation":TDV.Tour.Script.setMapLocation,"showPopupImage":TDV.Tour.Script.showPopupImage,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getComponentByName":TDV.Tour.Script.getComponentByName,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio},"mediaActivationMode":"window","definitions": [{"frames":[{"cube":{"levels":[{"url":"media/panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":9216,"rowCount":3,"colCount":18,"height":1536},{"url":"media/panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"rowCount":2,"colCount":12,"height":1024},{"url":"media/panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313_0/{face}/2/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"rowCount":1,"colCount":6,"height":512},{"url":"media/panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","width":9216,"rowCount":1,"colCount":6,"height":1536}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313_t.jpg"}],"label":trans('panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313.label'),"id":"panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313","partial":false,"pitch":0,"overlays":["this.overlay_0580949A_09BA_EE55_41A1_62257223F5EE"],"class":"Panorama","hfov":360,"data":{"label":"dipo 1"},"hfovMin":"150%","hfovMax":130,"vfov":180,"adjacentPanoramas":[{"panorama":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A","class":"AdjacentPanorama","distance":100,"backwardYaw":-82.78,"yaw":128.33,"select":"this.overlay_0580949A_09BA_EE55_41A1_62257223F5EE.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313_t.jpg"},{"class":"PanoramaCamera","initialSequence":"this.sequence_E557CCC7_E87C_03D7_41E7_5378C7ED9D1C","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_E600E017_E87C_0277_41E9_223ACDCA141A_camera","automaticZoomSpeed":10},{"gyroscopeVerticalDraggingEnabled":true,"class":"PanoramaPlayer","displayPlaybackBar":true,"touchControlMode":"drag_rotation","mouseControlMode":"drag_rotation","zoomEnabled":true,"arrowKeysAction":"translate","id":"MainViewerPanoramaPlayer","viewerArea":"this.MainViewer","surfaceSelectionEnabled":false},{"frames":[{"cube":{"levels":[{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/0/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":"ondemand","width":6144,"rowCount":2,"colCount":12,"height":1024},{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/1/{row}_{column}.jpg","class":"TiledImageResourceLevel","tags":["ondemand","preload"],"width":3072,"rowCount":1,"colCount":6,"height":512},{"url":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_0/{face}/vr/0.jpg","class":"TiledImageResourceLevel","tags":"mobilevr","width":6144,"rowCount":1,"colCount":6,"height":1024}],"class":"ImageResource"},"class":"CubicPanoramaFrame","thumbnailUrl":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_t.jpg"}],"label":trans('panorama_E600E017_E87C_0277_41E9_223ACDCA141A.label'),"id":"panorama_E600E017_E87C_0277_41E9_223ACDCA141A","partial":false,"pitch":0,"overlays":["this.overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4"],"class":"Panorama","hfov":360,"data":{"label":"dipo 2"},"hfovMin":"150%","hfovMax":130,"vfov":180,"adjacentPanoramas":[{"panorama":"this.panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313","class":"AdjacentPanorama","distance":33.14,"backwardYaw":128.33,"yaw":-82.78,"select":"this.overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_E600E017_E87C_0277_41E9_223ACDCA141A_t.jpg"},{"class":"PanoramaCamera","initialSequence":"this.sequence_E2615CFF_E864_03B7_41E0_13000110C70E","initialPosition":{"yaw":0,"class":"PanoramaCameraPosition","pitch":0},"id":"panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313_camera","automaticZoomSpeed":10},{"items":[{"media":"this.panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_0580C49A_09BA_EE55_41A1_57ACB6BA9313_camera"},{"media":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A","end":"this.trigger('tourEnded')","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)","player":"this.MainViewerPanoramaPlayer","camera":"this.panorama_E600E017_E87C_0277_41E9_223ACDCA141A_camera"}],"id":"mainPlayList","class":"PlayList"},{"progressBottom":0,"toolTipShadowSpread":0,"id":"MainViewer","playbackBarProgressBorderRadius":0,"progressHeight":10,"progressBarBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowBlurRadius":0,"progressBorderSize":0,"subtitlesFontFamily":"Arial","displayTooltipInTouchScreens":true,"playbackBarProgressBackgroundColor":["#3399FF"],"borderRadius":0,"subtitlesTextDecoration":"none","playbackBarHeadShadowVerticalLength":0,"subtitlesBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarHeadShadowOpacity":0.7,"width":"100%","progressBarBorderRadius":0,"toolTipBorderColor":"#767676","surfaceReticleOpacity":0.6,"subtitlesPaddingTop":5,"progressBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"subtitlesShadow":false,"borderSize":0,"surfaceReticleColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":3,"subtitlesOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"subtitlesGap":0,"playbackBarLeft":0,"toolTipFontStyle":"normal","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundColor":"#000000","subtitlesVerticalAlign":"bottom","toolTipPaddingBottom":4,"toolTipOpacity":1,"playbackBarHeadShadowHorizontalLength":0,"vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","toolTipDisplayTime":600,"toolTipBorderSize":1,"subtitlesTextShadowOpacity":1,"progressRight":0,"playbackBarProgressBorderColor":"#000000","height":"100%","toolTipPaddingRight":6,"playbackBarBorderRadius":0,"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColorDirection":"vertical","playbackBarHeadShadowColor":"#000000","playbackBarHeadBorderSize":0,"progressBackgroundOpacity":1,"playbackBarHeadHeight":15,"progressOpacity":1,"shadow":false,"progressBorderRadius":0,"progressBarBackgroundColorDirection":"vertical","subtitlesFontColor":"#FFFFFF","toolTipPaddingTop":4,"playbackBarHeadShadow":true,"doubleClickAction":"toggle_fullscreen","playbackBarHeadOpacity":1,"subtitlesEnabled":true,"propagateClick":false,"paddingTop":0,"subtitlesBorderSize":0,"paddingBottom":0,"playbackBarHeadBorderRadius":0,"subtitlesHorizontalAlign":"center","toolTipShadowBlurRadius":3,"playbackBarProgressOpacity":1,"progressLeft":0,"toolTipShadowOpacity":1,"toolTipShadowHorizontalLength":0,"toolTipBackgroundColor":"#F6F6F6","toolTipShadowColor":"#333333","vrPointerColor":"#FFFFFF","firstTransitionDuration":0,"subtitlesTextShadowVerticalLength":1,"paddingLeft":0,"playbackBarHeadBorderColor":"#000000","toolTipBorderRadius":3,"surfaceReticleSelectionOpacity":1,"subtitlesPaddingLeft":5,"subtitlesFontWeight":"normal","progressBorderColor":"#000000","paddingRight":0,"progressBarBorderColor":"#000000","playbackBarBorderSize":0,"subtitlesBottom":50,"playbackBarOpacity":1,"toolTipTextShadowBlurRadius":3,"playbackBarHeadBackgroundColor":["#111111","#666666"],"vrPointerSelectionColor":"#FF6600","toolTipHorizontalAlign":"center","toolTipTextShadowColor":"#000000","subtitlesPaddingRight":5,"subtitlesTop":0,"playbackBarBottom":5,"progressBarBackgroundColor":["#3399FF"],"playbackBarProgressBackgroundColorDirection":"vertical","toolTipPaddingLeft":6,"minHeight":50,"subtitlesTextShadowColor":"#000000","toolTipFontWeight":"normal","minWidth":100,"subtitlesFontSize":"3vmin","toolTipFontFamily":"Arial","toolTipTextShadowOpacity":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarBackgroundOpacity":1,"displayTooltipInSurfaceSelection":true,"subtitlesBackgroundOpacity":0.2,"class":"ViewerArea","toolTipShadowVerticalLength":0,"playbackBarHeight":10,"playbackBarHeadBackgroundColorDirection":"vertical","progressBackgroundColor":["#FFFFFF"],"toolTipFontSize":"1.11vmin","transitionMode":"blending","subtitlesPaddingBottom":5,"playbackBarProgressBorderSize":0,"playbackBarBackgroundColorDirection":"vertical","transitionDuration":500,"playbackBarRight":0,"progressBarOpacity":1,"toolTipFontColor":"#606060"},{"areas":["this.HotspotPanoramaOverlayArea_E4D846AD_E87C_0E5B_41DB_736F23445A13"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":11.57,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"verticalAlign":"middle","distance":50,"image":"this.res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","pitch":-0.94,"yaw":128.33,"hfov":10.68}],"id":"overlay_0580949A_09BA_EE55_41A1_62257223F5EE","data":{"hasPanoramaAction":true,"label":"Image"},"maps":[]},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_E557CCC7_E87C_03D7_41E7_5378C7ED9D1C","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"areas":["this.HotspotPanoramaOverlayArea_E5E3C414_E87C_0249_41B5_032C55EC4FDF"],"class":"HotspotPanoramaOverlay","rollOverDisplay":false,"useHandCursor":true,"enabledInCardboard":true,"items":[{"class":"HotspotPanoramaOverlayImage","vfov":8.44,"horizontalAlign":"center","scaleMode":"fit_inside","data":{"label":"Image"},"verticalAlign":"middle","distance":50,"image":"this.res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","pitch":-2.94,"yaw":-82.78,"hfov":9.16}],"id":"overlay_E642D3B7_E87C_0648_41E3_03FBFD10A5E4","data":{"hasPanoramaAction":true,"label":"Image"},"maps":[]},{"restartMovementOnUserInteraction":false,"class":"PanoramaCameraSequence","id":"sequence_E2615CFF_E864_03B7_41E0_13000110C70E","movements":[{"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","easing":"linear","yawSpeed":7.96,"yawDelta":323},{"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96,"yawDelta":18.5}]},{"click":"this.mainPlayList.set('selectedIndex', 1)","mapColor":"any","id":"HotspotPanoramaOverlayArea_E4D846AD_E87C_0E5B_41DB_736F23445A13","class":"HotspotPanoramaOverlayArea"},{"id":"res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452","class":"ImageResource","levels":[{"url":"media/res_E5B9DAE1_E87C_07C8_41A6_DC3A01859452_0.png","width":114,"class":"ImageResourceLevel","height":114}]},{"click":"this.mainPlayList.set('selectedIndex', 0)","mapColor":"any","id":"HotspotPanoramaOverlayArea_E5E3C414_E87C_0249_41B5_032C55EC4FDF","class":"HotspotPanoramaOverlayArea"}],"mobileMipmappingEnabled":false,"height":"100%","data":{"defaultLocale":"en","name":"Player615","textToSpeechConfig":{"speechOnQuizQuestion":false,"speechOnTooltip":false,"pitch":1,"stopBackgroundAudio":false,"speechOnInfoWindow":false,"rate":1,"volume":1},"locales":{"en":"locale/en.txt"}}};
    if (d['data'] == undefined)
        d['data'] = {};
    d['data']['translateObjs'] = c;
    d['data']['history'] = {};
    d['scripts']['createQuizConfig'] = createQuizConfig;
    TDV['PlayerAPI']['defineScript'](d);
}());
//# sourceMappingURL=http://localhost:9000/script_device_v2021.0.4.js.map
//Generated with v2021.0.4, Mon Jun 14 2021