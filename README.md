# About

Simple progress bar in react

# State

In progress

# Props

```
    className?: string;
    min: number;
    max: number;
    value: number;
    isLoading?: boolean;
    label?: string | JSX.Element;
    onClick?: () => void;
```

# Style

The component is comming with no style.

It has a default style black and white you should override it.

## css class dyna-progress-bar__background

Is the class name of the wrapper of the component, apply there the background color and/or borders.

## css class dyna-progress-bar__progress

Is the inside progress bar, apply there the background of the progress bar.

## css class dyna-progress-bar__label

Is the wrapper of the label, center the label as you prefer.

## The default style

This the default styles you should override

```
.dyna-progress-bar {
    &__background{
        background-color: white;
        border: 1px solid black;
    }
    &__progress{
        background-color: gray;
        border-right: 1px solid black;
    }
    &__label{
    }
}
```
