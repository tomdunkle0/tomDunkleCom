$deersimJavaScripts = Get-ChildItem .\deersim\ -Filter *.js -Recurse
$discographyJavaScripts = Get-ChildItem .\discography\ -Filter *.js -Recurse
$highPointsJavaScripts = Get-ChildItem .\high_points\ -Filter *.js -Recurse
$allJavaScripts = $deersimJavaScripts + $discographyJavaScripts + $highPointsJavaScripts

$numberOfTestFailures = 0

foreach ($javaScript in $allJavaScripts)
{
    try
    {
        $filePath = $javaScript.FullName
        $linesOfCode = Get-Content -Path $filePath
        if ($linesOfCode.Count -ge 1000)
        {
            ++$numberOfTestFailures
            Write-Host TEST FAILURE in $filePath -ForegroundColor Red
            Write-Host File is longer than 1000 lines.
            Write-Host -----------------------------------
        }
        else
        {
            foreach ($line in $linesOfCode)
            {
                if ($line.Length -gt 100)
                {
                    ++$numberOfTestFailures
                    Write-Host TEST FAILURE in $filePath -ForegroundColor Red
                    Write-Host Line length $line.Length is greater than 100 characters.
                    Write-Host $line
                    Write-Host -----------------------------------
                }
            }
        }
    }
    catch
    {
        Write-Host "Error reading file: $($_.Exception.Message)"
    }
}

Write-Host "Total number of test failures: $numberOfTestFailures"
