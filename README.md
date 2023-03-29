## Introduction

This was an attempt to use ChatGPT 3.5 to generate an entire web-page based on requirements alone. The repository showcases the end result after 2 hours of back and forth. The time limit of 2 hours was set initially based on the estimate (high confidence) of how long it would take to manually produce this web page.

## Initial ChatGPT Prompt

Create a GitHub Pages website for comparing the before and after of an image using a slider. The requirements are the following:

1) User can select two images from their local device (focusing on Web for now, but ideally image file selection should work on any device).

2) The two images are overlayed on top of each other with a slider defaulted to be in the middle of the image (middle by width). There should be a handle on the slider which can be used to drag the slider either left or right.

3) Dragging the slider entirely to one side (either left or right) should entirely reveal image 1 and hide image 2. Dragging the slider to the other side would do the opposite, showing image 2 and hiding image 1.

4) Having the slider somewhere in the middle of the two states, (the two states being completely to the left and completely to the right), should show part of one image and part of another. For example, if the slider is 30% of the way between left and right, then 30% of image 1 will show and 70% of image 2 will show.

5) If the user has selected two images with different heights of widths, then a warning message should show indicating that fact, but the process should continue as best as possible.

## Result

ChatGPT satisfied the core requirement of comparing two images overlayed on top of each other with a slider. There were non-functional issues that remained after many iterations: 1) The image container should not be visible until an image has been selected. 2) The slider should be prevented from moving outside the width of the images.