from jenkspy import JenksNaturalBreaks
import csv


# Important Variables
N_CLASSES = 8
cases_state_10000_list = []

# Read cases state data
with open('./data_filtered/cases_state_histogram.csv', mode='r') as cases_state_data:
    
    # Parse file and initialize line count
    csv_reader = csv.reader(cases_state_data, delimiter=',')
    line_count = 0
    
    # Read each row
    for row in csv_reader:
        
        # Ignore Header
        if line_count != 0:
            
            # Add to list
            cases_state_10000 = float(row[3])
            cases_state_10000_list.append(cases_state_10000)
            
        line_count += 1

# Compute Break Points
jnb = JenksNaturalBreaks(N_CLASSES)
jnb.fit(cases_state_10000_list)
print(jnb.inner_breaks_)