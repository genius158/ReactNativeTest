package com.reacttest2.circle;

import android.content.Context;
import android.content.Intent;
import android.graphics.Canvas;
import android.graphics.Paint;
import android.support.annotation.Nullable;
import android.support.v4.content.LocalBroadcastManager;
import android.util.AttributeSet;
import android.util.Log;
import android.view.MotionEvent;
import android.view.View;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.PixelUtil;
import com.reacttest2.MainActivity;

/**
 * Created by yan on 2016/10/8.
 */

public class CircleView extends View {
    private final String TAG = "CircleView";
    private Paint mPaint; // 画笔
    private float mRadius;
    private Integer mColor;

    public CircleView(Context context) {
        super(context);
        mPaint = new Paint();
    }

    public void setmRadius(Integer mRadius) {
        this.mRadius = PixelUtil.toPixelFromDIP(mRadius);
        postInvalidate();
    }

    public void setmColor(Integer mColor) {
        this.mColor = mColor;
        postInvalidate();

    }


    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);
        LocalBroadcastManager.getInstance(getContext()).sendBroadcast(new Intent("CIRCLE_VIEW_ONCLICK"));
        if (mColor != null)
            mPaint.setColor(mColor);
        canvas.drawCircle(mRadius, mRadius, mRadius, mPaint); // 画一个半径为100px的圆
        Log.d(TAG, "绘图");
    }
}
