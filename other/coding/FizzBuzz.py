for x in range(1,100):
	if ((x%3!=0) and (x%5!=0)) :
		print(x, end='');
	if (x%3==0) :
		print("Fizz", end='');
	if (x%5==0) :
		print("Buzz", end='');
	print('');
import sys
print(sys.version);
