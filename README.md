# Archived
This repo has been archived! It moved to the [kreuzwerker gitlab](https://gitlab.kreuzwerker.de/engineering/xw-posterize).
If you liked the function it provided you can still access it from [here](https://engineering.hosted-by-xw.de/xw-posterize). Enjoy!

# Posterize
This is a simple tool to transform an image in the kreuzwerker style:

Turn this:
![](doc/goose_thumb.jpg)

into this:
![](doc/goose_xw_thumb.jpg)

## Usage
You need NodeJs to be installed on your computer.

Run
```shell
% npm install
% npm run start
```
and point your web browser to  [http://localhost:4200/](`http://localhost:4200/`)

![](doc/startScreen.png)

• drag an image to the blue area or use the button to upload a file:

![](doc/original_uploaded.png)

• now you can apply one of the provided presets on the left:

![](doc/preset_applied.png)

• save this image by right-clicking on it:

![](doc/save_poster.png)

The image will be in same format and size as the original.

Currently JPEG and PNG files are supported.



This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.0.

