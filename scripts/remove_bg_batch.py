import os
import shutil
import cv2
import numpy as np
from PIL import Image
from rembg import new_session, remove

def main():
    img_dir = r'c:\Users\Shrikesh Shetty\Documents\Navyronix\public\images'
    backup_dir = r'c:\Users\Shrikesh Shetty\Documents\Navyronix\public\images_backup'
    os.makedirs(backup_dir, exist_ok=True)

    exclude = {'ship2.jpeg', 'ship3.webp', 'ship4.jpg'}
    all_files = [f for f in os.listdir(img_dir) if os.path.isfile(os.path.join(img_dir, f)) and f not in exclude]

    print(f"Total images to process: {len(all_files)}")
    
    # 1. Backup all original images
    for f in all_files:
        src = os.path.join(img_dir, f)
        dst = os.path.join(backup_dir, f)
        if not os.path.exists(dst):
            shutil.copy2(src, dst)
    print("Backup completed successfully.")

    # 2. Initialize u2netp lightweight AI model
    session = new_session('u2netp')
    print("AI Model loaded. Starting batch background removal...")

    success_count = 0
    for idx, filename in enumerate(all_files, 1):
        file_path = os.path.join(img_dir, filename)
        try:
            input_im = Image.open(file_path).convert('RGB')
            # Remove background using rembg
            out_im = remove(input_im, session=session)

            # Post-process alpha to remove small isolated corner supplier text / marks
            arr = np.array(out_im)
            alpha = arr[:, :, 3]
            binary = (alpha > 30).astype(np.uint8)
            num_labels, labels, stats, centroids = cv2.connectedComponentsWithStats(binary)

            if num_labels > 1:
                largest_label = 1 + np.argmax(stats[1:, cv2.CC_STAT_AREA])
                max_area = stats[largest_label, cv2.CC_STAT_AREA]
                clean_alpha = np.zeros_like(alpha)
                for i in range(1, num_labels):
                    # Keep components that are substantial (> 12% of main machine area)
                    # or components that have at least 8000 pixels
                    comp_area = stats[i, cv2.CC_STAT_AREA]
                    if comp_area >= 0.12 * max_area or comp_area >= 8000:
                        clean_alpha[labels == i] = alpha[labels == i]
                arr[:, :, 3] = clean_alpha

            # Save back to webp with transparency
            result_im = Image.fromarray(arr)
            result_im.save(file_path, format='WEBP', quality=95)

            success_count += 1
            if idx % 5 == 0 or idx == len(all_files):
                print(f"[{idx}/{len(all_files)}] Processed: {filename}")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

    print(f"\nAll done! Successfully removed background for {success_count}/{len(all_files)} images.")

if __name__ == '__main__':
    main()
