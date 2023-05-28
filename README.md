# progress-bar

# Installation
npm install @rockcoolsaint/progress-bar
yarn add @rockcoolsaint/progress-bar

## Features
*  Vertical progress bar
*  Horizontal progress bar
*  Very customizable

## Usage
Basic usage:
This is by default a progress bar and it is vertical
The progress bar fills up whatever container parent container
```
<div style={{height: '20rem'}}>
    <ProgressBar />
</div>
```

Props: 
* bgColor: string (optional)
* percentage: number (optional)
* mode: string (optional)
* progressText: boolean (optional)
* progressTextColor: string (optional)

Examples
```
<ProgressBar
    bgColor="#e916a1",
    percentage=90,
    mode="vertical",
    progressText=true,
    progressTextColor="white",
    width='3rem'
/>
```

Horizontal progress bar
```
<ProgressBar
    bgColor="green",
    percentage=90,
    mode="horizontal",
    progressText=true,
    progressTextColor="white"
/>
```

If you having difficulty, don't hesitate to send me a mail at rockcoolsaint@gmail.com