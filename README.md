# Zen Anime Website (Single Page Application)

## How use git to get this website
1. Install git on your device and configure email and username
2. use git command `git clone https://github.com/YovenBlast/ZenAnime.git` in destination folder
3. Install VSCode (preferred app as test done using Live Server for VSCode)
4. In your destination folder you should now see a `ZenAnime` folder
5. Open that folder in VSCode

## VSCode Config
1. In VSCode, search for the Live Server Extension and install it
2. Next, start the `Live Server` by either using:
	- `Command Palette` using `CTRL + SHIFT + P` then type `Open with Live Server`
	- A live server button found in the bottom-right corner in the blue thin footer for VSCode, name `Go Live`
3. Next VSCode will load the project in your default browser
4. Do open any specific file before opening Live Server, as it will only open 1 single html file which will defeat the purpose of the SPA

## Tips
- If `url` in browser is as such `http://127.0.0.1:5500/home.html`, the application won't work as intended(also means VSCode Config step 4 was ignored)
- According to the previous, if it ever happens, change the `url` to `http://127.0.0.1:5500/`, everything will be back to normal
- This github includes all images and "`databases`" (which are .txt file or .json files)
- If you want to test is directly on your phone, 
	1. Connect phone to the same next network as your PC/Server
	2. using `ipconfig` in `CMD` on your PC, take your `IPv4 Address`
	3. Then in `Google Chrome/Or Any browser` on your phone, type the `IP Address` followed by `:5500`
	4. For example, `192.168.100.1:5500` 

## Website By:
- Maheswaren Chinnasamy
- 2203_24229
- Top 10 Anime Streaming
- University of Technology, Pointe aux Sables

