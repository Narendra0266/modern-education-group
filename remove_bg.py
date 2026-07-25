from PIL import Image
import sys

def remove_white_bg(input_path, output_path, tolerance=220):
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()
    
    new_data = []
    for item in data:
        # Check if the pixel is white-ish
        if item[0] > tolerance and item[1] > tolerance and item[2] > tolerance:
            # Change white pixels to transparent
            new_data.append((255, 255, 255, 0))
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save(output_path, "PNG")

if __name__ == "__main__":
    remove_white_bg("public/images/mgc_logo.png", "public/images/mgc_logo.png")
