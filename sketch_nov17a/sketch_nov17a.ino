#include <Servo.h>
Servo myservo;


void setup() {
  Serial.begin(9600);
  myservo.attach(D6);
}

void loop() {
  String data = Serial.readStringUntil('\n');
  Serial.println(data);
  if(data == "S"){
    myservo.write(90);
    delay(50);
  }
  else if(data == "M"){
    myservo.write(90);
    delay(50);
  }
}