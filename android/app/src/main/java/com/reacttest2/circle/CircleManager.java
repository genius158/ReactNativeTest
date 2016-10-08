package com.reacttest2.circle;

import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;

/**
 * Created by yan on 2016/10/8.
 */

public class CircleManager extends SimpleViewManager<CircleView> {
    @Override
    public String getName() {
        return "MCircle";
    }

    @Override
    protected CircleView createViewInstance(ThemedReactContext reactContext) {
        return new CircleView(reactContext);
    }

    @ReactProp(name = "radius")
    public void setRadius(CircleView circleView,Integer radius){
        circleView.setmRadius(radius);
    }

    @ReactProp(name = "color")
    public void setColor(CircleView circleView,Integer color){
        circleView.setmColor(color);
    }

}
