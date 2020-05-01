require 'json'
require 'airtable'
require 'active_support/all'

@client = Airtable::Client.new("keyZb12cZRDYPXpOW")

@table = @client.table("apppCwdY0OP5mfZBY","Structures")
@record = @table.records(:filterByFormula => "published", :sort => ["Entreprise", :desc], :limit => 100)

File.open("_data/entreprises.json", "w") do |f|
    data = @records.map { |record| record.attributes }
    f.write(data.to_json)
end
