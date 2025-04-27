function out = simple_calc(type, x, y)
    % type: 'add', 'subtract', 'multiply', 'divide'
    switch type
        case 'add'
            out = x + y;
        case 'subtract'
            out = x - y;
        case 'multiply'
            out = x * y;
        case 'divide'
            out = x / y;
    end
end