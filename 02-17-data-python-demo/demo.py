first_name = 'James'
print(first_name)

last_name = 'Hager'
print(last_name)

# f string
# print(f"Hello {first_name}.")

age = 14 # int
float = 22.55  # float
loves_code = True  # boolean

print("age:", age)
print("float:", float)
print("loves_code:", loves_code)

print("Type of age:", type(age))

if age >= 18:
  print("I am an adult")



  
elif age >= 13:
  print("I am a teen")
else:
  print("I am a pre-teen")

num1 = 2
num2 = 2
num3 = 2
num4 = 3

if num1 == num2 and num2 == num3:
  print('test and: is true')

if num1 == num2 or num2 == num4:
  print('test or: is true')

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for number in numbers:
  print("number:", number)

strings = ['s1','s2','s3','s4']

for str in strings:
  print("string:", str.capitalize())

#
# play with the CVS file
#

final_grades = open('FinalGrades.csv')

for row in final_grades:
  print("row:", row)

final_grades.seek(0,0)

# for index, row in enumerate(final_grades):
#   print("index:", index, "row:", row)

# final_grades.seek(0,0)

for row in final_grades:
  row = row.split(',')
  for val in row:
    if val.startswith('J'):
      print("name begins with J:",val)


final_grades.seek(0,0)

total_a = 0
total_b = 0
total_c = 0

for row in final_grades:
  item = row.rstrip('\n').split(',')
  for val in item:
    if val == 'A':
      total_a += 1
    elif val == 'B':
      total_b += 1
    elif val == 'C':
      total_c += 1

print("A:", total_a, "B:", total_b, "C:", total_c)

final_grades.close()
