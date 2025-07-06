# A select few certain files in the tomDunkleCom repository are over 100MB, which means that they
#  cannot be hosted directly in git. This script downloads those files directly from my Google
#  Drive account, where they are publicly shared. This script requires gdown to run. gdown can be
#  installed through pip with: pip install gdown

gdown https://drive.google.com/uc?id=1Hj3G0y0QNlfq-lRnH59wOJtGjl_ANwIM -O .\high_points\nv\walking_up_hills_ep_01.mp4
