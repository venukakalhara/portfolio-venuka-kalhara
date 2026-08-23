Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("public\venuka About me.jpg")

$encoder = [System.Drawing.Imaging.Encoder]::Quality
$encoderParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
$encoderParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter($encoder, [long]70)

$codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
$jpegCodec = $codecs | Where-Object { $_.MimeType -eq "image/jpeg" }

$tempPath = "public\venuka About me_temp.jpg"
$img.Save($tempPath, $jpegCodec, $encoderParams)
$img.Dispose()

Move-Item -Path $tempPath -Destination "public\venuka About me.jpg" -Force
Copy-Item -Path "public\venuka About me.jpg" -Destination "src\images\234.jpeg" -Force
Write-Host "Compressed successfully!"
