# Video Background Implementation Notes

## Current Implementation
The hero section uses a Vimeo iframe as a full-screen background video with the following features:

### Video Parameters:
- `background=1` - Enables background mode for seamless playback
- `autoplay=1` - Attempts to start video automatically
- `loop=1` - Loops the video continuously
- `muted=0` - Plays with sound (may be blocked by browsers)
- `autopause=0` - Prevents pausing when not in view

### Browser Autoplay Policies:
Modern browsers block autoplay with sound unless:
1. User has interacted with the page
2. Site is whitelisted by user
3. User has high engagement with the site

### Fallback Solutions Implemented:

1. **Click-to-Play Overlay**: Shows when autoplay is blocked
2. **iframe Reload**: Reloads video with user interaction to trigger autoplay
3. **Visual Feedback**: Clear play button and instructions

### Alternative Video Background Methods:

#### Option 1: HTML5 Video Element
```html
<video autoplay muted loop playsinline>
  <source src="video.mp4" type="video/mp4">
</video>
```
Pros: Better control, faster loading
Cons: Requires hosting video file, larger file sizes

#### Option 2: YouTube Embed (No Sound)
```html
<iframe src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1&mute=1&loop=1&playlist=VIDEO_ID&controls=0">
```
Pros: Free hosting, good performance
Cons: No sound option, YouTube branding

#### Option 3: Self-Hosted with Video.js
More complex but provides full control over video playback, fallbacks, and user experience.

### Current Status:
✅ HTML5 video background implemented (ready for MP4 file)
✅ Autoplay with sound attempted
✅ Smart fallback handling (muted then unmuted if blocked)
✅ Click-to-play overlay for browser restrictions
✅ Responsive scaling across devices
✅ Text overlay with proper contrast

### MP4 Implementation Benefits:
- Direct video control without iframe limitations
- Better performance and loading
- More reliable autoplay handling
- Custom fallback strategies
- No third-party dependencies

### To Use Your MP4 File:
1. Upload MP4 to `/public/` directory
2. Update video source path in hero-section.tsx
3. Video will auto-play with sound (with fallback for blocked browsers)