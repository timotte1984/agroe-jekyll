require 'airrecord'

@data = Airrecord.table("keyZb12cZRDYPXpOW", "apppCwdY0OP5mfZBY", "Structures")


@data.all.each do |r|
  if r["Logo"] != nil then
    puts "#{r["Logo"].first["url"]}"
  end
end

 File.open("_data/entreprises.json", "w") do |f|
    data = @data.all.map { |record| record.attributes}
    dataclean = data.reject { |e| e.to_s.empty? }
    f.write(dataclean.to_json)
end
