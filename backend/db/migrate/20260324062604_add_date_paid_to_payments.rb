class AddDatePaidToPayments < ActiveRecord::Migration[8.1]
  def change
    add_column :payments, :date_paid, :date
  end
end
