# Photoveda website

# Image manipulation plugin

This will eventually have ability to take screenshots, make graphs and
AI clipart and so on.

At this time we are starting with simple image tricks.

Get payment from [this place](https://extensionpay.com)

## Effects/filters

+ fish eye effect
+ miniature faking
+ tilt lens
+ motion blur
+ radial blur
+ mirrored blur
+ linear blur

+ Polaroid
+ Sepia
+ Kodachrome
+ Contrast
+ Brightness
+ Greyscale
+ Brownie
+ Vintage
+ Technicolor
+ Pixelate
+ Invert
+ Blur
+ Sharpen
+ Emboss
+ RemoveColor
+ BlacknWhite
+ Vibrance
+ BlendColor
+ BlendImage
+ HueRotate
+ Resize
+ Saturation
+ Gamma


[Image plugin chrome tutorial](https://freshman.tech/first-chrome-extension/)

* Cropping, Resizing & Rotation
* Light and Dark Adjustments
* Manipulating Colors
* Noise and Sharpening Tools
* Image Selection Tools
* Applying Filters
* Addition of Text and Graphics
* adjusting RGB, brightness, contrast, hue, and saturation

API features

* adjustments (Color adjustments)
* filters (Pre-defined image filters)
* draw (Free drawing)
* crop (Crop incl. pre-defined crop sizes)
* stickers (Image stickers)
* text (Text manipulations)
* transform (Flip, rotate)
* frame (Image frame)
* blur (Image blur (zoom, tilt))
* shape (Image shape (circle, diamond, etc.))
* background (Remove a background, or replace it with solid color or another image)

API responses.

onSave callback accepts the edited image(s) as argument. This argument
is object with the following methods:

* toImage returns (Object) new Image element
* toImages returns Array of Image elements (applicable to batch and
 multiple editing)
* toDataURL returns (String) dataurl string of the image data
* toDataURLs returns Array of dataurl strings of the images (applicable to
 batch and multiple editing)
* toBase64 returns (String) base64 encoded string of the image data
 toBase64s returns Array of base64 encoded strings of the images
 (applicable to batch and multiple editing)
* toBlob returns (Blob) image data suitable for upload via FormData
 element
* toBlobs returns Array of blobs suitable for upload via FormData element
* toJSON returns the edited image in raw JSON data, suitable for editing
 back
* toJSONs returns Array of raw JSON data of the images (applicable to
 batch and multiple editing)
* download downloads the image(s) as file(s) (one by one) to user’s file
 system
* downloadAll downloads image(s) as a ZIP archive to user’s file system

[Inspiration](https://pixoeditor.com/documentation/#example-multiple)

## This is cutout.pro

- Background Remover
- Face Cutout
- Photo Enhancer
- Photo Colorizer
- Image Retouch
- Cartoon Selfie
- Passport Photo
- Photo Animer(cartoon)
- Photo Color Correction
- AI Art Generation
- Background Diffusion

## pixoeditor API methods

- adjustments (Color adjustments)
- filters (Pre-defined image filters)
- draw (Free drawing)
- crop (Crop incl. pre-defined crop sizes)
- stickers (Image stickers)
- text (Text manipulations)
- transform (Flip, rotate)
- frame (Image frame)
- blur (Image blur (zoom, tilt))
- shape (Image shape (circle, diamond, etc.))
- background (Remove a background, or replace it with solid color or
another image)

[Docs](https://www.cutout.pro/api-document/bg-remover)

[Chrome support](https://support.google.com/chrome_webstore/contact/one_stop_support)

## Adjustments

+ Brightness 
+ Saturation 
+ Contrast 
+ Gamma 
+ Clarity 
+ Exposure 
+ Shadows
+ Highlights
+ Whites 
+ Blacks 
+ Temperature

## Overlays

+ Normal Overlay 
+ Hard Light 
+ Soft Light 
+ Multiply 
+ Darken 
+ Lighten
+ Screen 
+ Color Burn

## Shapes

+ Circle (fabric.Circle)
+ Ellipse (fabric.Ellipse)
+ Line (fabric.Line)
+ Polygon (fabric.Polygon)
+ Polyline (fabric.Polyline)
+ Rectangle (fabric.Rect)
+ Triangle (fabric.Triangle)
+ arrow
+ star
+ polygon 
+ badge

## Stickers

+ Emoticons
+ Doodles
+ Landmarks
+ Stars
+ CLouds
+ Bubbles
+ Transportation
+ Beach

## Frame

+ Basic
+ Pine
+ Oak
+ Rainbow
+ Grunge
+ Ebony
+ Art

## Crop ratios

+ 1:1
+ 3:2
+ 5:3
+ 4:3
+ 5:4 
+ 6:4
+ 7:5
+ 10:8 
+ 16:9
+ custom

