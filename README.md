Client - company that makes academic maths papers easier to read

product - scans paper looking for sums, extracts sums as strings and feeds it through a string calculator 
string calculator evaluates the sum string and out puts the sum string with the evaluated result

build - string calculator 

input => output
"1" => ["1", 1]
"2" => ["2", 2]
"3" => ["3", 3]


"1 + 1" => ["1 + 1", 2]
"1 * 2" => ["1 * 2", 2]
"2 - 1" => ["2 - 1", 1]
"4 / 2" => ["4 / 2", 2]

"1 + 1 * 2" => ["1 + 1 * 2", 4]
"1 + 3 / 2" => ["1 + 3 / 2", 2]


"" => ["", 0]
1 + 1 => error(Invalid Input)
