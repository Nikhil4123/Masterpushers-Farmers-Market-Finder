# Fix Git Remote - Push to Your Forked Repository

## Current Issue
Your Git remote is pointing to your friend's repository instead of your fork.

**Current remote:**
- Origin: `https://github.com/Pavan0228/Masterpushers-Farmers-Market-Finder.git`

## Solution: Update Remote to Your Fork

### Step 1: Get Your Forked Repository URL

Your forked repository URL should look like:
```
https://github.com/YOUR-USERNAME/Masterpushers-Farmers-Market-Finder.git
```

Replace `YOUR-USERNAME` with your actual GitHub username.

### Step 2: Update the Remote

Run these commands in your terminal:

```bash
# Navigate to your project
cd "C:\Users\asus\vsCode\Hackthon\n\Masterpushers-Farmers-Market-Finder"

# Remove the current origin (pointing to friend's repo)
git remote remove origin

# Add your fork as origin
git remote add origin https://github.com/YOUR-USERNAME/Masterpushers-Farmers-Market-Finder.git

# Add friend's repo as upstream (to pull updates later)
git remote add upstream https://github.com/Pavan0228/Masterpushers-Farmers-Market-Finder.git

# Verify the remotes
git remote -v
```

### Step 3: Push Your Code to Your Fork

```bash
# Add all your changes
git add .

# Commit your changes
git commit -m "Configure for Vercel deployment"

# Push to your fork (origin)
git push -u origin master
```

### Step 4: Verify

After pushing, check your GitHub repository to confirm the code is there.

---

## Alternative: If You Already Have a Remote Named "upstream"

If you get an error that "upstream" already exists:

```bash
# Remove existing upstream
git remote remove upstream

# Then add it again
git remote add upstream https://github.com/Pavan0228/Masterpushers-Farmers-Market-Finder.git
```

---

## Quick Commands (Copy-Paste Ready)

Replace `YOUR-USERNAME` with your GitHub username:

```bash
cd "C:\Users\asus\vsCode\Hackthon\n\Masterpushers-Farmers-Market-Finder"
git remote remove origin
git remote add origin https://github.com/YOUR-USERNAME/Masterpushers-Farmers-Market-Finder.git
git remote add upstream https://github.com/Pavan0228/Masterpushers-Farmers-Market-Finder.git
git remote -v
git add .
git commit -m "Configure for Vercel deployment"
git push -u origin master
```

---

## Future: Pull Updates from Friend's Repo

To get updates from your friend's repository:

```bash
# Fetch updates from upstream (friend's repo)
git fetch upstream

# Merge updates into your branch
git merge upstream/master

# Push to your fork
git push origin master
```

---

## Troubleshooting

### Error: "remote origin already exists"
- Solution: Use `git remote set-url origin https://github.com/YOUR-USERNAME/Masterpushers-Farmers-Market-Finder.git`

### Error: "Permission denied" or "Authentication failed"
- Solution: Make sure you're logged into GitHub in your terminal
- Or use GitHub CLI: `gh auth login`

### Error: "Branch not found"
- Solution: Check if your branch is `master` or `main`
- Use: `git branch` to see current branch
- If it's `main`, use: `git push -u origin main`

