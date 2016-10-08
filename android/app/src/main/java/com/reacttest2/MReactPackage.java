package com.reacttest2;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.JavaScriptModule;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;
import com.reacttest2.circle.CircleManager;
import com.reacttest2.intent2act2.IntentModule;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

/**
 * Created by yan on 2016/10/8.
 */

public class MReactPackage implements ReactPackage {

    /**
     * 创建原生模块
     *
     * @param reactContext
     * @return
     */
    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        List<NativeModule> modules = new ArrayList<>();
        modules.add(new IntentModule(reactContext));
        return modules;
    }

    @Override
    public List<Class<? extends JavaScriptModule>> createJSModules() {
        return Collections.emptyList();
    }

    /**
     * 创建原生UI组件控制器
     *
     * @param reactContext
     * @return
     */
    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        List<ViewManager> list = new ArrayList();
        list.add(new CircleManager());
        return list;
    }
}