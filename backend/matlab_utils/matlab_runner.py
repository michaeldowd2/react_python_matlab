import matlab.engine
import os

# Start MATLAB once when server boots
eng = matlab.engine.start_matlab()

# Add your MATLAB folder to the MATLAB path
matlab_folder = os.path.abspath(os.path.join(os.path.dirname(__file__), '../../matlab'))
eng.addpath(matlab_folder, nargout=0)

def run_simple_calc(calc_type, x, y):
    result = eng.simple_calc(str(calc_type),float(x), float(y))
    return result

def run_complex_calc(no_records, scale):
    result = eng.complex_calc(int(no_records), float(scale))
    # result is a matlab.double object, e.g. [[1.0, 2.0, 3.0]]
    py_list = list(result[0])  # This will be a nested list: [[1.0, 2.0, 3.0]]
    return py_list