$deersimJavaScripts = Get-ChildItem .\deersim\ -Filter *.js -Recurse
$discographyJavaScripts = Get-ChildItem .\discography\ -Filter *.js -Recurse
$highPointsJavaScripts = Get-ChildItem .\high_points\ -Filter *.js -Recurse
$allJavaScripts = $deersimJavaScripts + $discographyJavaScripts + $highPointsJavaScripts

$numberOfTestFailures = 0

for ($jsIndex=0; $jsIndex -lt $allJavaScripts.Count; $jsIndex++)
{
    try
    {
        $content = Get-Content -Path $allJavaScripts[$jsIndex].FullName
        foreach ($line in $content)
        {
            if ($line.Length -gt 100)
            {
                ++$numberOfTestFailures
                Write-Host TEST FAILURE in $allJavaScripts[$jsIndex].FullName -ForegroundColor Red
                Write-Host Line length $line.Length is greater than 100 characters.
                Write-Host $line
                Write-Host -----------------------------------
            }
        }
    }
    catch
    {
        Write-Host "Error reading file: $($_.Exception.Message)"
    }
}

Write-Host "Total number of test failures: $numberOfTestFailures"
