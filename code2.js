gdjs.SettingsCode = {};
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects1= [];
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects2= [];
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects3= [];
gdjs.SettingsCode.GDsettingshadowsObjects1= [];
gdjs.SettingsCode.GDsettingshadowsObjects2= [];
gdjs.SettingsCode.GDsettingshadowsObjects3= [];
gdjs.SettingsCode.GDshadowsObjects1= [];
gdjs.SettingsCode.GDshadowsObjects2= [];
gdjs.SettingsCode.GDshadowsObjects3= [];
gdjs.SettingsCode.GDVolumeObjects1= [];
gdjs.SettingsCode.GDVolumeObjects2= [];
gdjs.SettingsCode.GDVolumeObjects3= [];
gdjs.SettingsCode.GDSettingsObjects1= [];
gdjs.SettingsCode.GDSettingsObjects2= [];
gdjs.SettingsCode.GDSettingsObjects3= [];
gdjs.SettingsCode.GDsettingsoundObjects1= [];
gdjs.SettingsCode.GDsettingsoundObjects2= [];
gdjs.SettingsCode.GDsettingsoundObjects3= [];
gdjs.SettingsCode.GDsoundObjects1= [];
gdjs.SettingsCode.GDsoundObjects2= [];
gdjs.SettingsCode.GDsoundObjects3= [];
gdjs.SettingsCode.GDcrossairObjects1= [];
gdjs.SettingsCode.GDcrossairObjects2= [];
gdjs.SettingsCode.GDcrossairObjects3= [];
gdjs.SettingsCode.GDsettingfullscreenObjects1= [];
gdjs.SettingsCode.GDsettingfullscreenObjects2= [];
gdjs.SettingsCode.GDsettingfullscreenObjects3= [];
gdjs.SettingsCode.GDFullscreenObjects1= [];
gdjs.SettingsCode.GDFullscreenObjects2= [];
gdjs.SettingsCode.GDFullscreenObjects3= [];
gdjs.SettingsCode.GDvolplusObjects1= [];
gdjs.SettingsCode.GDvolplusObjects2= [];
gdjs.SettingsCode.GDvolplusObjects3= [];
gdjs.SettingsCode.GDvolminusObjects1= [];
gdjs.SettingsCode.GDvolminusObjects2= [];
gdjs.SettingsCode.GDvolminusObjects3= [];
gdjs.SettingsCode.GDbackObjects1= [];
gdjs.SettingsCode.GDbackObjects2= [];
gdjs.SettingsCode.GDbackObjects3= [];
gdjs.SettingsCode.GDvolumevolumeObjects1= [];
gdjs.SettingsCode.GDvolumevolumeObjects2= [];
gdjs.SettingsCode.GDvolumevolumeObjects3= [];
gdjs.SettingsCode.GDminusObjects1= [];
gdjs.SettingsCode.GDminusObjects2= [];
gdjs.SettingsCode.GDminusObjects3= [];
gdjs.SettingsCode.GDplusObjects1= [];
gdjs.SettingsCode.GDplusObjects2= [];
gdjs.SettingsCode.GDplusObjects3= [];
gdjs.SettingsCode.GDgobackObjects1= [];
gdjs.SettingsCode.GDgobackObjects2= [];
gdjs.SettingsCode.GDgobackObjects3= [];

gdjs.SettingsCode.conditionTrue_0 = {val:false};
gdjs.SettingsCode.condition0IsTrue_0 = {val:false};
gdjs.SettingsCode.condition1IsTrue_0 = {val:false};
gdjs.SettingsCode.condition2IsTrue_0 = {val:false};
gdjs.SettingsCode.conditionTrue_1 = {val:false};
gdjs.SettingsCode.condition0IsTrue_1 = {val:false};
gdjs.SettingsCode.condition1IsTrue_1 = {val:false};
gdjs.SettingsCode.condition2IsTrue_1 = {val:false};


gdjs.SettingsCode.eventsList0 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("volumevolume"), gdjs.SettingsCode.GDvolumevolumeObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) == 100;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("volumevolume"), gdjs.SettingsCode.GDvolumevolumeObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString("100");
}
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(100);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)) > 100;
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("volumevolume"), gdjs.SettingsCode.GDvolumevolumeObjects2);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects2[i].setString("100");
}
}{runtimeScene.getGame().getVariables().getFromIndex(14).setNumber(100);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("back"), gdjs.SettingsCode.GDbackObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDbackObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDbackObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDbackObjects1[k] = gdjs.SettingsCode.GDbackObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDbackObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", false);
}}

}


};gdjs.SettingsCode.eventsList1 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("shadows"), gdjs.SettingsCode.GDshadowsObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDshadowsObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDshadowsObjects2[i].setString("Shadows: On");
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString("toggled");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(12)) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("shadows"), gdjs.SettingsCode.GDshadowsObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDshadowsObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDshadowsObjects1[i].setString("Shadows: Off");
}
}{runtimeScene.getGame().getVariables().getFromIndex(12).setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(0).setNumber(1);
}}

}


};gdjs.SettingsCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("settingshadows"), gdjs.SettingsCode.GDsettingshadowsObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDsettingshadowsObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDsettingshadowsObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDsettingshadowsObjects1[k] = gdjs.SettingsCode.GDsettingshadowsObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDsettingshadowsObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList3 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sound"), gdjs.SettingsCode.GDsoundObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDsoundObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDsoundObjects2[i].setString("Sound: On");
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).setString("toggled");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(13)) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("sound"), gdjs.SettingsCode.GDsoundObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDsoundObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDsoundObjects1[i].setString("Sound: Off");
}
}{runtimeScene.getGame().getVariables().getFromIndex(13).setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


};gdjs.SettingsCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("settingsound"), gdjs.SettingsCode.GDsettingsoundObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDsettingsoundObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDsettingsoundObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDsettingsoundObjects1[k] = gdjs.SettingsCode.GDsettingsoundObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDsettingsoundObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(1).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList3(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("volplus"), gdjs.SettingsCode.GDvolplusObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDvolplusObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDvolplusObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDvolplusObjects1[k] = gdjs.SettingsCode.GDvolplusObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDvolplusObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
/* Reuse gdjs.SettingsCode.GDvolplusObjects1 */
gdjs.copyArray(runtimeScene.getObjects("volumevolume"), gdjs.SettingsCode.GDvolumevolumeObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)));
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(14).add(1);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolplusObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolplusObjects1[i].setAnimationName("down");
}
}}

}


};gdjs.SettingsCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("volminus"), gdjs.SettingsCode.GDvolminusObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDvolminusObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDvolminusObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDvolminusObjects1[k] = gdjs.SettingsCode.GDvolminusObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDvolminusObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("volplus"), gdjs.SettingsCode.GDvolplusObjects1);
gdjs.copyArray(runtimeScene.getObjects("volumevolume"), gdjs.SettingsCode.GDvolumevolumeObjects1);
{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(14)));
}{for(var i = 0, len = gdjs.SettingsCode.GDvolumevolumeObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolumevolumeObjects1[i].setString(gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(14)));
}
}{runtimeScene.getGame().getVariables().getFromIndex(14).sub(1);
}{for(var i = 0, len = gdjs.SettingsCode.GDvolplusObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDvolplusObjects1[i].setAnimationName("down");
}
}}

}


};gdjs.SettingsCode.eventsList7 = function(runtimeScene) {

{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "untoggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fullscreen"), gdjs.SettingsCode.GDFullscreenObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDFullscreenObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDFullscreenObjects2[i].setString("Fullscreen: On");
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setString("toggled");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "toggled";
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 0;
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("Fullscreen"), gdjs.SettingsCode.GDFullscreenObjects1);
{for(var i = 0, len = gdjs.SettingsCode.GDFullscreenObjects1.length ;i < len;++i) {
    gdjs.SettingsCode.GDFullscreenObjects1[i].setString("Fullscreen: Off");
}
}{runtimeScene.getGame().getVariables().getFromIndex(15).setString("untoggled");
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


};gdjs.SettingsCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("settingfullscreen"), gdjs.SettingsCode.GDsettingfullscreenObjects1);

gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.SettingsCode.GDsettingfullscreenObjects1.length;i<l;++i) {
    if ( gdjs.SettingsCode.GDsettingfullscreenObjects1[i].getBehavior("InteractiveButton").isClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.SettingsCode.condition0IsTrue_0.val = true;
        gdjs.SettingsCode.GDsettingfullscreenObjects1[k] = gdjs.SettingsCode.GDsettingfullscreenObjects1[i];
        ++k;
    }
}
gdjs.SettingsCode.GDsettingfullscreenObjects1.length = k;}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(2).setString("");
}
{ //Subevents
gdjs.SettingsCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.SettingsCode.eventsList9 = function(runtimeScene) {

{



}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "toggled";
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, false);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(15)) == "untoggled";
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, false);
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("crossair"), gdjs.SettingsCode.GDcrossairObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDcrossairObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDcrossairObjects2[i].setZOrder(109087867987);
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("crossair"), gdjs.SettingsCode.GDcrossairObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDcrossairObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDcrossairObjects2[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0),gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crossair"), gdjs.SettingsCode.GDcrossairObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDcrossairObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDcrossairObjects2[i].rotateTowardAngle(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.SettingsCode.GDcrossairObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDcrossairObjects2[i].rotateTowardAngle(gdjs.evtTools.input.getMouseY(runtimeScene, "", 0), 0, runtimeScene);
}
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
if (gdjs.SettingsCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("crossair"), gdjs.SettingsCode.GDcrossairObjects2);
{for(var i = 0, len = gdjs.SettingsCode.GDcrossairObjects2.length ;i < len;++i) {
    gdjs.SettingsCode.GDcrossairObjects2[i].rotateTowardAngle(0, 0, runtimeScene);
}
}}

}


{


{
}

}


{



}


{



}


{



}


{



}


{


{
{}}

}


{


{
{}}

}


{



}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "c");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
{gdjs.SettingsCode.conditionTrue_1 = gdjs.SettingsCode.condition1IsTrue_0;
gdjs.SettingsCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(29537796);
}
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.p2p.connect(gdjs.evtsExt__DebugMessages__prompt.func(runtimeScene, "Enter the Companion app connection ID", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.p2p.onEvent("SayHi", true);
}if (gdjs.SettingsCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__DebugMessages__popup.func(runtimeScene, "Hi", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.SettingsCode.condition0IsTrue_0.val = false;
gdjs.SettingsCode.condition1IsTrue_0.val = false;
{
gdjs.SettingsCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Escape");
}if ( gdjs.SettingsCode.condition0IsTrue_0.val ) {
{
gdjs.SettingsCode.condition1IsTrue_0.val = gdjs.evtTools.systemInfo.isPreview(runtimeScene);
}}
if (gdjs.SettingsCode.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


};gdjs.SettingsCode.eventsList10 = function(runtimeScene) {

{


gdjs.SettingsCode.eventsList0(runtimeScene);
}


{


gdjs.SettingsCode.eventsList2(runtimeScene);
}


{


gdjs.SettingsCode.eventsList4(runtimeScene);
}


{


gdjs.SettingsCode.eventsList5(runtimeScene);
}


{


gdjs.SettingsCode.eventsList6(runtimeScene);
}


{


gdjs.SettingsCode.eventsList8(runtimeScene);
}


{


gdjs.SettingsCode.eventsList9(runtimeScene);
}


};

gdjs.SettingsCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SettingsCode.GDfade_95tiled_95spriteObjects1.length = 0;
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects2.length = 0;
gdjs.SettingsCode.GDfade_95tiled_95spriteObjects3.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects1.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects2.length = 0;
gdjs.SettingsCode.GDsettingshadowsObjects3.length = 0;
gdjs.SettingsCode.GDshadowsObjects1.length = 0;
gdjs.SettingsCode.GDshadowsObjects2.length = 0;
gdjs.SettingsCode.GDshadowsObjects3.length = 0;
gdjs.SettingsCode.GDVolumeObjects1.length = 0;
gdjs.SettingsCode.GDVolumeObjects2.length = 0;
gdjs.SettingsCode.GDVolumeObjects3.length = 0;
gdjs.SettingsCode.GDSettingsObjects1.length = 0;
gdjs.SettingsCode.GDSettingsObjects2.length = 0;
gdjs.SettingsCode.GDSettingsObjects3.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects1.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects2.length = 0;
gdjs.SettingsCode.GDsettingsoundObjects3.length = 0;
gdjs.SettingsCode.GDsoundObjects1.length = 0;
gdjs.SettingsCode.GDsoundObjects2.length = 0;
gdjs.SettingsCode.GDsoundObjects3.length = 0;
gdjs.SettingsCode.GDcrossairObjects1.length = 0;
gdjs.SettingsCode.GDcrossairObjects2.length = 0;
gdjs.SettingsCode.GDcrossairObjects3.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects1.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects2.length = 0;
gdjs.SettingsCode.GDsettingfullscreenObjects3.length = 0;
gdjs.SettingsCode.GDFullscreenObjects1.length = 0;
gdjs.SettingsCode.GDFullscreenObjects2.length = 0;
gdjs.SettingsCode.GDFullscreenObjects3.length = 0;
gdjs.SettingsCode.GDvolplusObjects1.length = 0;
gdjs.SettingsCode.GDvolplusObjects2.length = 0;
gdjs.SettingsCode.GDvolplusObjects3.length = 0;
gdjs.SettingsCode.GDvolminusObjects1.length = 0;
gdjs.SettingsCode.GDvolminusObjects2.length = 0;
gdjs.SettingsCode.GDvolminusObjects3.length = 0;
gdjs.SettingsCode.GDbackObjects1.length = 0;
gdjs.SettingsCode.GDbackObjects2.length = 0;
gdjs.SettingsCode.GDbackObjects3.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects1.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects2.length = 0;
gdjs.SettingsCode.GDvolumevolumeObjects3.length = 0;
gdjs.SettingsCode.GDminusObjects1.length = 0;
gdjs.SettingsCode.GDminusObjects2.length = 0;
gdjs.SettingsCode.GDminusObjects3.length = 0;
gdjs.SettingsCode.GDplusObjects1.length = 0;
gdjs.SettingsCode.GDplusObjects2.length = 0;
gdjs.SettingsCode.GDplusObjects3.length = 0;
gdjs.SettingsCode.GDgobackObjects1.length = 0;
gdjs.SettingsCode.GDgobackObjects2.length = 0;
gdjs.SettingsCode.GDgobackObjects3.length = 0;

gdjs.SettingsCode.eventsList10(runtimeScene);
return;

}

gdjs['SettingsCode'] = gdjs.SettingsCode;
