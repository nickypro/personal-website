#include <stdio.h>
void printhex ( int n, char v[] );

typedef struct { double re, im; } COMPLEX;

int main()
{
  float a = 1.0/2;
  printf ( "float %f\n      ", a );
  printhex (sizeof(float), (char*) &a);

  char hello[] = "hello";
  printf("hello\n      ");
  printhex (6, hello);

  short s = 30000;
  printf("short %d\n      ", s);
  printhex (sizeof(short), (char*) &s);

  int w = 1234567;
  printf("int %d\n      ", w);
  printhex (sizeof(int), (char*) &w);

  float x = (float) 100/19;
  printf("float %f\n      ", x);
  printhex(sizeof(float), (char*) & x);

  double y = (double) 100/19;
  printf("double %f\n      ", x);
  printhex(sizeof(double), (char*) & x);

  COMPLEX z = {4, 5};
  printf("complex %f %f\n      ", z.re, z.im);
  printhex(sizeof(COMPLEX), (char*) & z);
}
