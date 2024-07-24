# Snippets

## Motors
There are many motor apis but usually they have a few things in common:

`.set` takes a value from -1 to 1 for motor power.
## Servos
```c++
frc::Servo servo {1};

// Position from 0.0 to 1.0
servo.Set(0.5);
// Angle from 0 to 180
servo.SetAngle(75);

```
## Drivetrain
See last year's repo
